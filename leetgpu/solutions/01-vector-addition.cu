// LeetGPU #1: Vector Addition (Easy) — AC ✅ 2026-09-11
// https://leetgpu.com/challenges/vector-addition
//
// 踩坑記錄：
//   第一版把全域 index 寫成 blockIdx.x + blockDim.x + threadIdx.x（加號），
//   i 全部 >= N → if 全擋 → C 全 0。公式是「區編號×每區人數+區內編號」，乘號不能錯。
#include <cuda_runtime.h>

__global__ void vector_add(const float* A, const float* B, float* C, int N) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < N) {
        C[i] = A[i] + B[i];
    }
}

// A, B, C are device pointers (i.e. pointers to memory on the GPU)
extern "C" void solve(const float* A, const float* B, float* C, int N) {
    int threadsPerBlock = 256;
    int blocksPerGrid = (N + threadsPerBlock - 1) / threadsPerBlock;

    vector_add<<<blocksPerGrid, threadsPerBlock>>>(A, B, C, N);
    cudaDeviceSynchronize();
}
