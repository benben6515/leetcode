export function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  let min = Infinity
  let result: number[][] = []
  for (let i = 0; i < arr.length - 1; i++) {
    const left = arr[i]
    const right = arr[i + 1]
    const diff = right - left
    if (diff < min) {
      min = diff
      result = [[left, right]]
    } else if (diff === min) {
      result.push([left, right])
    }
  }
  return result
}

// 2025/11/26 done.
// Runtime 53 ms Beats 74.71%
// Memory 70.13 MB Beats 81.61%
