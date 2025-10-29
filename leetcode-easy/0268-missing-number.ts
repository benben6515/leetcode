export function missingNumber(nums: number[]): number {
  const average = ((0 + nums.length) / 2) * (nums.length + 1)
  const currentSum = nums.reduce((a, b) => a + b, 0)
  return average - currentSum
}

// 2025.10.29
// Runtime 0 ms Beats 100.00%
// Memory 57.73 MB Beats 77.41%
