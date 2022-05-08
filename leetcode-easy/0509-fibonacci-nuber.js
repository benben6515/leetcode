/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const dp = {
    0: 0,
    1: 1,
  }
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
    }
  }
  return dp[n]
};

// 2022/03/26 Done
// Runtime: 66 ms, faster than 82.46% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 42 MB, less than 51.42% of JavaScript online submissions for Fibonacci Number.
