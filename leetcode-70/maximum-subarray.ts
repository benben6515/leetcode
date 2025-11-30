export function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let result = -Infinity
  let isAllNegative = true
  let current = 0
  let left = 0
  let right = 0
  while (right < nums.length) {
    if (nums[right] > 0) isAllNegative = false
    current += nums[right]
    if (current < 0) {
      left = right
      current = 0
    }
    if (isAllNegative) {
      result = Math.max(result, nums[right])
    } else {
      result = Math.max(result, current)
    }
    right++
  }
  return result
}
