// 練習 3：heap 配置（cudaMalloc 的前身）
// 編譯：g++ 03_heap.cpp -o 03 && ./03
//
// 目標輸出：
//   d[3] = 6
//  沒有 leak、沒有 crash
//
// 提醒：valgrind mac 上不好裝，用 -fsanitize=address 抓錯：
//   g++ -fsanitize=address 03_heap.cpp -o 03 && ./03

#include <cstdio>

// TODO 3-4（進階）：這段 code 有 bug，找出來並修正：
// 為什麼錯？修法：改成 heap 配置回傳指標。
// 修好後貼在下面，並在 main 試呼叫一次、印一個元素、delete[]。
float* makeBuf(int n) {
    // float buf[100];
    float* buf = new float[n];
    for (int i = 0; i < n; i++) buf[i] = 1.0f;
    return buf;
}

int main() {
    const int N = 8;

    // TODO 3-1：用 new[] 在 heap 配 N 個 float，指標叫 data
    float* data = new float[N];

    // TODO 3-2：填入 data[i] = i * 2.0f（用 for）
    for (int i = 0; i < N; i++) {
      data[i] = i * 2.0f;
    }

    printf("d[3] = %g\n", data[3]);   // 應印 6

    // TODO 3-3：正確釋放（注意 new[] 對應哪種 delete）
    delete[] data;

    float* buf = makeBuf(100);
    printf("buf[4] = %g\n", buf[3]);
    delete[] buf;

    return 0;
}

