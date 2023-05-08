function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result = Array<number>(arr.length)
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i)
  }
  return result
}

export { map }

// 2023/05/08 done
// Runtime 61 ms Beats 61.13%
// Memory 42.8 MB Beats 66.10%
