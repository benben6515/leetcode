export function maxSubArrayDP1(nums: number[]): number {
  const dp = new Array(nums.length).fill(nums[0])
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }
  return Math.max(...dp)
}

// 2025/12/01 done.

// ---

export function maxSubArrayDP2(nums: number[]): number {
  let currentSum = 0
  let result = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[0] < 0) {
      currentSum = nums[0]
    }
    currentSum = Math.max(currentSum + nums[i], nums[i])
    result = Math.max(result, currentSum)
  }
  return result
}

// 2025/12/01 done.
// Runtime 1 ms Beats 86.38%
// Memory 64.46 MB Beats 67.45%
