// 練習 2：陣列 = 指標
// 編譯：g++ 02_arrays.cpp -o 02 && ./02
//
// 目標輸出：
//   sum = 15
//   arr[0]=5 arr[4]=1
//   1 4 3 2 5

#include <cstdio>

// TODO 2-1：回傳陣列所有元素總和（用指標參數接收）
float sumArr(/* 你決定參數 */, int n);

// TODO 2-2：原地反轉陣列（不能用第二個陣列，提示：兩個指標從兩端互撞）
void reverseArr(float* arr, int n);

int main() {
    float arr[5] = {1, 2, 3, 4, 5};

    printf("sum = %g\n", sumArr(arr, 5));

    // TODO 2-3：不用 arr[k] 寫法、只用指標算術 *(p + k)，
    // 把 arr[0] 改成 5、arr[4] 改成 1（各一行）

    printf("arr[0]=%g arr[4]=%g\n", arr[0], arr[4]);

    reverseArr(arr, 5);
    for (int i = 0; i < 5; i++) printf("%g ", arr[i]);
    printf("\n");

    return 0;
}
