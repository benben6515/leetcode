# C++ 觀念筆記（踩坑整理版）

給「會別的語言、新學 C++」的人。重點放 C++ 跟其他語言**不一樣**的地方。

## 0. 心智模型差異（先建立這個）

|          | Python / JS / Java         | C++                                        |
| -------- | -------------------------- | ------------------------------------------ |
| 記憶體   | GC 自動回收                | `new`/`delete` 自己管                      |
| `b = a`  | 複製「引用」（標籤貼上去） | **複製整份資料**（盒子倒一份）             |
| 越界存取 | 丟例外給你看               | 未定義行為（UB）：可能爆、可能靜默給垃圾值 |
| 編譯     | 直譯/部分編譯              | 編譯期就把型別全部檢查                     |

核心：C++ 變數是**盒子**（資料本體），不是**標籤**（指向資料）。
所以 `std::vector<float> b = a;` 會複製 1024 個 float — 別的語言不會這樣。

## 1. 變數有壽命：stack vs heap

```cpp
void f() {
    float buf[100];      // stack：函式 return 自動銷毀
    float* p = new float[100];   // heap：你親手 delete 才死
    delete[] p;
}
```

|               | 什麼時候死       | 誰負責 |
| ------------- | ---------------- | ------ |
| stack 變數    | 函式 return 自動 | 編譯器 |
| heap（`new`） | 你 `delete` 才死 | 你     |

**Dangling pointer（懸空指標）**：回傳區域變數的位址 → 函式 return 後那塊記憶體已死，
指標還記著位址但內容是垃圾。最陰險：有時「碰巧」印對，換機器就爆。

```cpp
float* makeBuf(int n) {
    float buf[100];        // ❌ stack，return 後死
    return buf;            // ❌ 回傳死記憶體的位址
}
// 修法：float* buf = new float[n]; → 責任轉移給呼叫方 delete[]
```

配對規則：`new` ↔ `delete`、`new[]` ↔ `delete[]`，錯配是 UB。

| CPU              | GPU（未來）               |
| ---------------- | ------------------------- |
| `new` / `delete` | `cudaMalloc` / `cudaFree` |

## 2. 陣列退化 vs vector 物件

**Raw array 的名字會自動退化成指標**：

```cpp
float arr[5];
float* p = arr;    // OK，arr 退化成 &arr[0]
```

**`std::vector` 是物件**（包著 heap buffer + 長度 + 容量），**不會退化**：

```cpp
std::vector<float> v(1024);
float* p = v;          // ❌ 編譯錯
float* p = v.data();   // ✅ 明確叫 .data() 拿底層指標
```

vector 三個必記操作：

| 寫法       | 意思                                   |
| ---------- | -------------------------------------- |
| `v[i]`     | 讀寫第 i 個元素                        |
| `v.size()` | 長度（型別 `size_t`）                  |
| `v.data()` | 底層 heap buffer 指標 — 餵 CUDA API 用 |

## 3. 傳參：值 vs 參考 vs 指標

```cpp
void byVal(std::vector<float> v);        // 複製整份 buffer，慢
void byRef(const std::vector<float>& v); // 別名，零複製，唯讀 ← vector 正統
void byPtr(float* p);                    // 指標版，呼叫方要傳 &
```

- **傳值** = 複製。`int` 便宜無所謂；vector 大就痛。
- **`&`（參考）** = 別名，零複製。要**改到原變數**或**避免複製**都用它。
- **`const&`** = 唯讀參考。函式「只看不改」就加 const，編譯器幫你把關。
- **指標**：跟參考二選一。差別：指標可以為 null、可以重新指向、算術；參考必綁定、語法乾淨。

經驗法則：大物件傳 `const&`；要修改傳 `&`（參考）或指標；小整數 float 直接傳值。

## 4. 指標型別要對應

```cpp
float arr[5];
int* p = arr;    // ❌ 編譯錯：float 陣列配 float*
```

指標型別 = 「指到的東西的型別」。指標算術 `p + 1` 跳的是**一個該型別元素**
（float\* + 1 跳 4 bytes），所以型別錯了算術也全錯。

## 5. off-by-one 與尾端指標

```cpp
float* end = arr + n;        // 指向「最後一個的下一個」，慣例上代表尾端
for (float* p = arr; p < end; p++)   // end 本身不含
```

最後一個元素是 `arr + n - 1`。反轉、搜尋類題目常踩 `p + n - i` 超界。

## 6. 未定義行為（UB）— 跟管理語言最大的差別

C++ 沒有 runtime 保護網。以下**不保證 crash**，常常靜默亂跑：

- 越界讀寫（`arr[n]`、反轉少 `-1`）
- 用死掉的指標/參考（dangling）
- `printf` 格式不對（`%g` 餵指標、`%d` 餵 float）
- `new`/`delete` 配錯或漏 delete（leak 不會自己報）

**防禦工具**：`-fsanitize=address` 編譯，越界/leak/use-after-free 會當場報：

```bash
g++ -fsanitize=address main.cpp -o main && ./main
```

## 7. printf 格式速查

| 格式        | 吃什麼                                    |
| ----------- | ----------------------------------------- |
| `%d`        | int                                       |
| `%g` / `%f` | float、double（printf 會自動升成 double） |
| `%zu`       | size_t（`v.size()` 的型別）               |
| `%p`        | 指標（位址本身）                          |
| `%c` / `%s` | char / 字串                               |

格式不對 = UB（有時候印對，有時候炸）。

## 8. 常見編譯錯誤速查

| 訊息關鍵字                           | 通常原因                          |
| ------------------------------------ | --------------------------------- |
| `expected ';'`                       | 少分號（return 那行）             |
| `'vector' was not declared`          | 缺 `std::` 前綴                   |
| `cannot initialize ... incompatible` | 指標/型別不匹配（int* vs float*） |
| `use of undeclared identifier`       | 函式用之前沒宣告，或拼錯          |

## 9. 練習中的實際踩坑

1. swap 換了兩個**複本**，陣列沒動 → swap 要透過 `*(p+i)` 寫回記憶體
2. 多養計數器 → 指標迴圈裡 `p - data` 就是 index，或直接 `for (int i...)`
3. `printf("%g\n", data)` 印了位址 → 印值用 `*data` 或 `data[0]`
4. `for (float* p = v; ...)` → vector 不退化，要 `v.data()`

---

下一步：CUDA。`cudaMalloc`（=heap）、`cudaMemcpy`（=memcpy）、kernel（=每個 thread 跑同一份函式）。
