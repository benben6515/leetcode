# C++ 快速入門（CUDA 刷題夠用版）

CUDA 不需要花俏 C++，重點是**指標和記憶體**。

## 1. 最小程式 + 編譯

```cpp
#include <cstdio>

int main() {
    printf("hello\n");
    return 0;
}
```

```bash
g++ main.cpp -o main && ./main
```

## 2. 型別與變數

```cpp
int i = 42;          // 整數
float f = 3.14f;     // 單精度浮點（GPU 最常用）
double d = 3.14;     // 雙精度
bool b = true;
char c = 'a';

const int N = 1024;  // 常數，不可改
```

GPU 世界 `float` 比 `double` 快很多，預設用 `float`。

## 3. 控制流

```cpp
if (x > 0) { } else { }

for (int i = 0; i < n; i++) { }

while (cond) { }
```

## 4. 函式

```cpp
float add(float a, float b) {
    return a + b;
}
```

參數**傳值**（複製）。要改到原變數用指標或參考：

```cpp
void bump(int* p)  { *p = *p + 1; }   // 指標版
void bump2(int& r) { r = r + 1; }     // 參考版，語法甜一點

int x = 5;
bump(&x);   // 指標要取址 &
bump2(x);   // 參考直接傳
```

## 5. 指標 — CUDA 的核心

指標 = 「存記憶體位址的變數」。

```cpp
int x = 5;
int* p = &x;      // p 存 x 的位址
*p = 10;          // 解參考：透過 p 改 x → x 變 10
```

**陣列就是指標**：

```cpp
float arr[4] = {1, 2, 3, 4};
float* p = arr;        // arr 退化成指向第一個元素的指標
p[2] = 9;              // 等同 arr[2] = 9
*(p + 3) = 7;          // 指標算術，等同 arr[3] = 7
```

**堆積（heap）配置** — 之後 `cudaMalloc` 的原型：

```cpp
float* data = new float[1000];   // 在 heap 要一塊
data[0] = 1.0f;
delete[] data;                   // 用完要還
```

| CPU | GPU |
|---|---|
| `new` / `delete` | `cudaMalloc` / `cudaFree` |
| `memcpy` | `cudaMemcpy` |

概念完全一樣，只是目的地不同。

## 6. struct — 把資料打包

```cpp
struct Vec3 {
    float x, y, z;
};

Vec3 v;
v.x = 1.0f;
```

CUDA kernel 常用 struct 傳設定，夠用了。
class、繼承、virtual → 先跳過，GPU 刷題用不到。

## 7. 樣板 — 看得懂就好

```cpp
template <typename T>
T maxOf(T a, T b) {
    return a > b ? a : b;   // 條件運算子：若 a>b 回 a 否則 b
}
```

需要「讀懂」樣板（CUDA 內建函式庫常見），初期不用會寫。

## 8. std::vector — 自動伸縮陣列

```cpp
#include <vector>

std::vector<float> v(1000);   // 1000 個 float，自動管理記憶體
v[0] = 1.0f;
v.size();                     // 長度
v.data();                     // 拿底層原始指標（餵給 CUDA API 用）
```

Host 端（CPU 側）資料用它，不用手動 `new` / `delete`。

## 9. 運算子備忘

```cpp
a % b      // 取餘數 — 算 thread index 超常用
a / b      // 整數除法會無條件捨去：7/2 == 3
i & 31     // 位元 AND — i % 32 的快寫（warp 相關）
```

## 不需要學的

class 繼承、virtual、STL 演算法、smart pointer、lambda、exceptions — 刷 LeetGPU 全用不到。

---

懂第 5 節（指標）就可以直接上 CUDA。下一步：第一個 kernel（vector add）。
