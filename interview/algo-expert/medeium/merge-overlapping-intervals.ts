export function mergeOverlappingIntervals(array: number[][]) {
  // Write your code here.
  const result: number[][] = []
  array = array.sort((a: number[], b: number[]) => a[0] - b[0])
  result.push(array[0])
  let index = 1

  while (index < array.length) {
    const last = result[result.length - 1]
    let low = array[index][0]
    let high = array[index][1]
    if (last[1] < low) result.push(array[index])
    else if (last[1] < high) last[1] = high
    index++
  }
  return result
}

// 2023-08-29 done.

// test ----------
const intervals = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
]
const output = mergeOverlappingIntervals(intervals)

// [[1,2], [3, 8], [9, 10]]
console.log(output)
