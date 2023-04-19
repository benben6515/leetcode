export function longestPeak(array: number[]) {
  // Write your code here.
  let longest = 0
  let i = 1

  while (i < array.length - 1) {
    if (array[i] > array[i - 1] && array[i + 1] < array[i]) {
      longest = Math.max(longest, findLengthOfPeak(array, i))
    }
    i++
  }
  return longest
}

function findLengthOfPeak(array: number[], i: number) {
  let leftIndex = i - 2
  while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
    leftIndex--
  }
  let rightIndex = i + 2
  while (
    rightIndex < array.length &&
    array[rightIndex] < array[rightIndex - 1]
  ) {
    rightIndex++
  }
  return rightIndex - leftIndex - 1
}

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
const result = 6 // 0, 10, 6, 5, -1, -3

console.log(longestPeak(array))
// 6
