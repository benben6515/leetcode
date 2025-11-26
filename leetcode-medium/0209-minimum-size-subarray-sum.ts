export function minSubArrayLen(target: number, nums: number[]): number {
  let result = 0
  let left = 0
  let currentSum = 0
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right]
    while (currentSum >= target) {
      const currentLength = right - left + 1
      if (result === 0) result = currentLength
      else result = Math.min(result, currentLength)
      currentSum -= nums[left]
      left++
    }
  }
  return result
}

// 2025/11/26 done.
// Runtime 3 ms Beats 59.22%
// Memory 59.62 MB Beats 58.22%
