export function singleNumber(nums: number[]): number {
  let result = 0
  nums.forEach((e) => {
    result = result ^ e
  })
  return result
}

// 2025/11/26 done.
// Runtime 1 ms Beats 77.43%
// Memory 55.48 MB Beats 94.83%
