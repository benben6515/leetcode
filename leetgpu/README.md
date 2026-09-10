# LeetGPU

GPU 編程刷題平台：在瀏覽器上對真實 NVIDIA GPU 跑 CUDA kernel。
https://leetgpu.com/

- **Challenges**：50+ 題，涵蓋 matrix ops、memory optimization、kernel fusion
- **Playground**：直接在瀏覽器寫 kernel + benchmark
- **CLI**：終端機跑 LeetGPU job

## 語言選擇

**CUDA C++，不用猶豫。** 平台原生 `.cu`、跑真 NVIDIA GPU，CUDA 是業界標準，所學直接可移植。
Triton 值得之後學（ML kernel 當紅），但刷這站用 CUDA。

## 刷題路線（按依賴順序）

1. **入門**：vector add、element-wise ops
   → 熟 grid / block / thread 三層架構、`blockIdx` / `threadIdx` 算法
2. **記憶體模式**：reduction（sum/max）
   → 學 warp divergence、`__syncthreads()`
3. **重點：coalesced memory access** — global memory 連續讀寫
   → GPU 效能第一課，很多題的坑在這
4. **Shared memory**：tiled matrix multiplication
   → naive matmul → tiled 版本，經典中的經典，面試常考
5. **進階**：prefix sum (scan)、histogram（atomic operations）、kernel fusion

## 進度

- [x] C++ 基本功：指標 / heap / vector / struct — `exercises/` 五題全過（解答在 `practices/`）
- [ ] 1. 入門：vector add ← **現在這裡**
- [ ] 2. 記憶體模式：reduction
- [ ] 3. coalesced memory access
- [ ] 4. shared memory：tiled matmul
- [ ] 5. 進階：scan / histogram / fusion

## 每題流程

先寫 naive 版能過 → 再想 memory access pattern 怎麼優化 → benchmark 比較。
單純 AC 沒意義，這站練的是「為什麼快 10 倍」。

## 核心心法

- CPU 思維：減少計算
- GPU 思維：**餵飽所有 thread + 減少 memory latency**
- 卡住時先問：
  1. 我的 memory access 有 coalesced 嗎？
  2. 有沒有該搬進 shared memory 的資料？

## 相關筆記

- [cpp-basics.md](./cpp-basics.md) — CUDA 夠用的 C++ 快速入門
- [cpp-concepts.md](./cpp-concepts.md) — 練習踩坑整理：stack/heap、傳參、UB、常見錯誤速查
- [cuda-basics.md](./cuda-basics.md) — 第一個 kernel（vector add）、thread index、六步流程
- [exercises/](./exercises/) — C++ 練習題（含 README 說明）
