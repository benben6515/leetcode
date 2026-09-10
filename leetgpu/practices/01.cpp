#include <cstdio>

// TODO 1-1：寫一個函式，透過指標把傳入的 int 改成 10
void setTen(int* v) {
  *v = 10;
}

// TODO 1-2：寫 swap（指標版），交換兩個 int
void swapPtr(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

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
    printf("p = %p\n", p);

    return 0;
}
