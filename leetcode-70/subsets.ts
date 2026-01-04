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
