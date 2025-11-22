export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const result: number[][] = []

  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index]
    if (index && currentValue === nums[index - 1]) continue
    let leftIndex = index + 1
    let rightIndex = nums.length - 1
    while (leftIndex < rightIndex) {
      const leftValue = nums[leftIndex]
      const rightValue = nums[rightIndex]
      const totalValue = currentValue + leftValue + rightValue
      if (totalValue < 0) {
        leftIndex++
      } else if (totalValue > 0) {
        rightIndex--
      } else {
        result.push([currentValue, leftValue, rightValue])
        leftIndex++
        rightIndex--
        while (leftIndex < rightIndex && leftValue === nums[leftIndex]) {
          leftIndex++
        }
      }
    }
  }

  return result
}
