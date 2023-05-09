function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const result: number[] = []
  arr.forEach((e, i) => {
    if (fn(e, i)) result.push(arr[i])
  })
  return result
}

// 2023/05/09 done
// Runtime 44 ms Beats 99.61%
// Memory 44.6 MB Beats 18.86%
