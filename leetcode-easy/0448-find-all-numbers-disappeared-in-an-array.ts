export function findDisappearedNumbers(nums: number[]): number[] {
  const counter = {}
  for (let i = 1; i < nums.length + 1; i++) {
    counter[i] = 0
  }
  nums.forEach((n) => {
    counter[n]++
  })
  const arr: number[] = []
  Object.entries(counter).forEach((e) => {
    if (e[1] === 0) arr.push(+e[0])
  })
  return arr
}

// 2025/10/30 done.
// Runtime 56 ms Beats 9.76%
// Memory 87.74 MB Beats 5.03%
