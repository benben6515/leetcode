export function countBits(n: number): number[] {
  if (n === 0) return [0]
  if (n === 1) return [0, 1]
  const dp = new Array(n).fill(0)
  dp[1] = 1
  let value = 1
  for (let i = 1; i <= n; i++) {
    if (i >= 2 * value) {
      value = value * 2
    }
    dp[i] = 1 + dp[i - value]
  }
  return dp
}
