export function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(nums[0])
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }
  return Math.max(...dp)
}

// 2025/12/01 done.
