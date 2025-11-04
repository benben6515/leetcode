export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sortedNums = nums.toSorted((a: number, b: number) => a - b)
  const result: number[] = []
  nums.forEach((e) => {
    const index = sortedNums.findIndex((_e: number) => _e === e)
    result.push(index)
  })
  return result
}
