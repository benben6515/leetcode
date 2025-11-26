export function singleNumber(nums: number[]): number {
  let result = 0
  nums.forEach((e) => {
    result = result ^ e
  })
  return result
}
