export function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let result = Infinity
  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index]
    if (index > 0 && currentValue === nums[index - 1]) continue
    let leftIndex = index + 1
    let rightIndex = nums.length - 1
    while (leftIndex < rightIndex) {
      const leftValue = nums[leftIndex]
      const rightValue = nums[rightIndex]
      const totalValue = currentValue + leftValue + rightValue
      const delta = Math.abs(totalValue - target)
      if (delta < Math.abs(result - target)) result = totalValue
      if (totalValue - target > 0) {
        rightIndex--
      } else if (totalValue - target < 0) {
        leftIndex++
      } else {
        return totalValue
      }
    }
  }
  return result
}

// 2025/11/22 done.
// Runtime 15 ms Beats 53.00%
// Memory 57.58 MB Beats 83.15%
