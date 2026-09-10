# CUDA 快速入門（vector add 起手式）

前置：`cpp-basics.md`（特別是指標）＋ `cpp-concepts.md`（stack/heap、傳參）。
macOS 跑不了 CUDA → 直接上 [LeetGPU](https://leetgpu.com/) 網頁端寫。

## 1. 完整最小範例：vector add

```cuda
#include <cstdio>

__global__ void vecAdd(float* a, float* b, float* c, int n) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) {
        c[i] = a[i] + b[i];
    }
}

int main() {
    const int N = 1024;

    // 1. host 端準備資料（就是你在練的 vector）
    float* h_a = new float[N];
    float* h_b = new float[N];
    for (int i = 0; i < N; i++) { h_a[i] = 1.0f; h_b[i] = 2.0f; }

    // 2. GPU 端要記憶體（= GPU 上的 new）
    float *d_a, *d_b, *d_c;
    cudaMalloc(&d_a, N * sizeof(float));
    cudaMalloc(&d_b, N * sizeof(float));
    cudaMalloc(&d_c, N * sizeof(float));

    // 3. CPU → GPU 複製
    cudaMemcpy(d_a, h_a, N * sizeof(float), cudaMemcpyHostToDevice);
    cudaMemcpy(d_b, h_b, N * sizeof(float), cudaMemcpyHostToDevice);

    // 4. 啟動 kernel：8 blocks × 128 threads = 1024 threads
    vecAdd<<<8, 128>>>(d_a, d_b, d_c, N);

    // 5. GPU → CPU 複製回來
    cudaMemcpy(h_c, d_c, N * sizeof(float), cudaMemcpyDeviceToHost);

    printf("c[0] = %g\n", h_c[0]);   // 3

    // 6. 收尾（兩邊都要還）
    cudaFree(d_a); cudaFree(d_b); cudaFree(d_c);
    delete[] h_a; delete[] h_b; delete[] h_c;
    return 0;
}
```

流程永遠是這六步：**host 準備 → cudaMalloc → 複製進去 → 啟動 kernel → 複製回來 → 全部釋放**。

## 2. 心智模型：一萬個你自己

CPU 寫法：一個 for 迴圈，一個人搬 1024 塊磚。
GPU 寫法：**開 1024 個 thread，每個人只搬一塊磚**。

```cuda
// CPU                              // GPU
for (int i = 0; i < N; i++)         __global__ void k(...) {
    c[i] = a[i] + b[i];                 int i = 全域index;
                                    }   c[i] = a[i] + b[i];
                                    // k<<<...>>>(...) 同時跑 N 份
```

kernel 本體看起來像 for 迴圈的一次 iteration — 因為「迴圈」被硬體展開了。

## 3. Thread index — 核心中的核心

每個 thread 靠這條公式算出「我是誰」：

```cuda
int i = blockIdx.x * blockDim.x + threadIdx.x;
//       └─ 第幾區 ─┘└─ 每區幾人 ─┘  └─ 區內第幾人 ─┘
```

| 變數 | 意思 |
|---|---|
| `threadIdx.x` | 區內編號（0 ~ blockDim.x-1） |
| `blockIdx.x` | 第幾個 block |
| `blockDim.x` | 每個 block 有幾個 thread |

例：`<<<8, 128>>>` → thread `(block 3, threadIdx 5)` 的全域 index = 3×128+5 = **389**。

**為什麼要 `if (i < n)`**：threads 以 block 為單位發放，N 不整除 blockDim 時會多發 —
多出來的要用 if 擋掉，不然越界寫入（= 你在 C++ 練過的 UB，這次炸的是 GPU）。

## 4. 記憶體 API 對照（你已經都會了）

| C++（你練過的） | CUDA |
|---|---|
| `new float[n]` | `cudaMalloc(&ptr, n * sizeof(float))` |
| `delete[] p` | `cudaFree(p)` |
| `memcpy(dst, src, bytes)` | `cudaMemcpy(dst, src, bytes, 方向)` |
| 裸指標走天下 | host 指標≠device 指標，**不能互解參考** |

`cudaMemcpy` 方向：`cudaMemcpyHostToDevice` / `cudaMemcpyDeviceToHost`。
命名慣例：`h_` 開頭 = host（CPU），`d_` 開頭 = device（GPU）。

## 5. `__global__` 與 `__device__`

| 修飾 | 誰呼叫 | 誰執行 |
|---|---|---|
| 無 | host | host（普通函式） |
| `__global__` | host（用 `<<<...>>>`） | device（成為一個 kernel） |
| `__device__` | device | device（kernel 內部互相呼叫用） |

刷題 95% 只用 `__global__`。

## 6. 常見新手爆點

1. **忘記 `if (i < n)`** → 越界，結果錯或 crash
2. **把 host 指標直接傳進 kernel** → `h_a` 和 `d_a` 是兩個世界的位址
3. **忘了 cudaMemcpy 回來** → GPU 算完放著，host 讀到舊垃圾
4. **blockDim 算錯總量**：要 N 個 thread → `blocks = (N + threads - 1) / threads`（無條件進位，整數除法你會了）
5. kernel 是「發射後不理」：同步問題刷題先用 `cudaMemcpy` 的隱式同步擋著

## 7. LeetGPU 工作流

1. 開題目 → 左側貼 code → Run
2. 看不懂報錯先查 §6
3. 輸出對了 = 過

---

下一步：上 LeetGPU 寫第一題 vector add，寫完回來對照 §1 六步流程檢查。
