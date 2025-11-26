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
