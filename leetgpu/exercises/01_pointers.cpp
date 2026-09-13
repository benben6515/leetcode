// 練習 1：指標基本操作
// 編譯：g++ 01_pointers.cpp -o 01 && ./01
//
// 規則：只能寫在 TODO 處，不得改 main 既有的其他行。
// 目標輸出：
//   x = 10
//   swap後 a=2 b=1
//   p = 0x...（一個位址）

#include <cstdio>

// TODO 1-1：寫一個函式，透過指標把傳入的 int 改成 10
void setTen(/* 你決定參數 */);

// TODO 1-2：寫 swap（指標版），交換兩個 int
void swapPtr(/* 你決定參數 */);

int main() {
    int x = 5;
    setTen(&x);
    printf("x = %d\n", x);   // 應印 10

    int a = 1, b = 2;
    swapPtr(&a, &b);
    printf("swap後 a=%d b=%d\n", a, b);

    int y = 42;
    int* p = &y;
    // TODO 1-3：只印出「p 裡存的位址」，格式 %p
    printf("p = %p\n", /* 這裡 */);

    return 0;
}
