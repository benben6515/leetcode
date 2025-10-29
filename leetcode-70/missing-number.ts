export function missingNumber(nums: number[]): number {
  const average = ((0 + nums.length) / 2) * (nums.length + 1)
  const currentSum = nums.reduce((a, b) => a + b, 0)
  return average - currentSum
}

// 2
console.log(missingNumber([1, 0, 3]))
