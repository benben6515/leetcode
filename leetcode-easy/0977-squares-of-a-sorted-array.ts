export function sortedSquares(nums: number[]): number[] {
  if (nums.length === 0) return nums
  if (nums.length === 1) return [nums[0] ** 2]
  let startIndex = 0
  let minDistance = Infinity
  nums.forEach((n, i) => {
    if (Math.abs(n) < minDistance) {
      minDistance = Math.abs(n)
      startIndex = i
    }
  })
  if (startIndex === nums.length - 1) startIndex--
  let left = startIndex
  let right = startIndex + 1
  const result: number[] = []
  while (left >= 0 && right < nums.length) {
    const leftNumber = Math.abs(nums[left])
    const rightNumber = Math.abs(nums[right])
    if (leftNumber < rightNumber) {
      result.push(leftNumber ** 2)
      left--
    } else {
      result.push(rightNumber ** 2)
      right++
    }
  }
  while (left >= 0) {
    const leftNumber = Math.abs(nums[left])
    result.push(leftNumber ** 2)
    left--
  }
  while (right < nums.length) {
    const rightNumber = Math.abs(nums[right])
    result.push(rightNumber ** 2)
    right++
  }
  return result
}

// 2025/11/12 done.
// Runtime 5 ms Beats 63.39%
