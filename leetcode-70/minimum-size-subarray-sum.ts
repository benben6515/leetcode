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
