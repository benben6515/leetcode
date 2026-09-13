// 練習 5：struct + 指標（kernel 參數打包的前身）
// 編譯：g++ 05_struct.cpp -o 05 && ./05
//
// 目標輸出：
//   before: (3, 4, 6)
//   after:  (6, 8, 12)
//   norm2 = 15.6155   （sqrt(6^2 + 8^2 + 12^2) = sqrt(244)）

#include <cstdio>
#include <cmath>

struct Vec3 {
    float x, y, z;
};

// TODO 5-1：寫 scale(Vec3* v, float s)——用指標原地縮放三個分量
void scale(/* 你決定參數 */);

// TODO 5-2：寫 norm2(Vec3 v)——回傳長度（用 sqrtf）
float norm2(Vec3 v);

int main() {
    Vec3 v = {3.0f, 4.0f, 6.0f};
    printf("before: (%g, %g, %g)\n", v.x, v.y, v.z);

    scale(&v, 2.0f);
    printf("after:  (%g, %g, %g)\n", v.x, v.y, v.z);

    printf("norm2 = %g\n", norm2(v));

    return 0;
}
