export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sortedNums = nums.toSorted((a: number, b: number) => a - b)
  const result: number[] = []
  nums.forEach((e) => {
    const index = sortedNums.findIndex((_e: number) => _e === e)
    result.push(index)
  })
  return result
}

// 2025/11/04 done.
// Runtime 8 ms Beats 61.44%
// Memory 58.63 MB Beats 50.98%
