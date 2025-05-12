function climbStairs(n: number): number {
  const dp = [0, 1, 2]
  if (n < 3) return dp[n]
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log(climbStairs(0)) // 0
console.log(climbStairs(1)) // 1
console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
