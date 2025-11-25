export function longestMountain(arr: number[]): number {
  let result = 0
  let i = 1
  while (i < arr.length) {
    const prev = arr?.[i - 1]
    const current = arr[i]
    const next = arr?.[i + 1]
    const isPeak = prev !== undefined && next !== undefined && prev < current && current > next
    if (isPeak) {
      let leftIndex = i - 1
      let rightIndex = i + 1
      while (leftIndex > 0 && arr?.[leftIndex - 1] !== undefined && arr?.[leftIndex - 1] < arr[leftIndex]) {
        leftIndex--
      }
      while (rightIndex > 0 && arr?.[rightIndex + 1] !== undefined && arr?.[rightIndex + 1] < arr[rightIndex]) {
        rightIndex++
      }
      result = Math.max(result, rightIndex - leftIndex + 1)
      i = rightIndex
    } else {
      i++
    }
  }
  return result
}

// 2025/11/25 done.
// Runtime 2 ms Beats 85.71%
// Memory 58.24 MB Beats 66.67%
