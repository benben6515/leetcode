export function subsets(nums: number[]): number[][] {
  const result: string[] = ['']

  nums.forEach((n) => {
    result.forEach((e) => {
      if (e !== '') {
        result.push(`${e},${n}`)
      } else {
        result.push(`${n}`)
      }
    })
  })

  const ans = result.map((e) => e.split(',').map((e) => +e))
  ans.shift()
  ans.unshift([])

  return ans
}

// 2026/01/04 done
// Runtime 0 ms Beats 100.00%
// Memory 59.31 MB Beats 6.62%
