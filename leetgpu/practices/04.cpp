// 練習 4：std::vector（host 端正統做法）
// 編譯：g++ 04_vector.cpp -o 04 && ./04
//
// 目標輸出：
//   size = 1024
//   first = 1 last = 1024
//   sum = 524800

#include <cstdio>
#include <vector>

// TODO 4-1：寫函式回傳 vector 所有元素總和
//（參數用 const std::vector<float>&，想一下為什麼用 &）
// float sumVec(const std::vector<float>& v) {
//   float sum = 0;
//   for (int i = 0; i < v.size(); i++) sum += v[i];
//   return sum;
// }
float sumVec(const std::vector<float>& v) {
  float sum = 0;
  const float* end = v.data() + v.size();
  for (const float* p = v.data(); p < end; p++) sum += *p;
  return sum;
}

int main() {
    std::vector<float> v(1024);

    // TODO 4-2：填入 v[i] = i + 1（用 for 或 vector 操作）
    for (int i = 0; i < v.size(); i++) {
      v[i] = i + 1;
    }

    printf("size = %zu\n", v.size());
    printf("first = %g last = %g\n", v.front(), v.back());

    printf("sum = %g\n", sumVec(v));

    // TODO 4-3：只印出 v 底層原始指標第一個元素的值（提示：v.data()）
    // 應印 1，格式：first = 1
    printf("first = %f\n", *v.data());

    return 0;
}
