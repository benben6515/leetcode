export const arr = [1, 2, 5, 6, 10]

console.log(binarySearch(arr, 5) === 2)
console.log(binarySearch(arr, 1) === 0)
console.log(binarySearch(arr, 10) === 4)
console.log(binarySearch(arr, 0) === -1)
console.log(binarySearch(arr, 20) === -1)

function binarySearch(arr: number[], target: number) {
  // code here
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}
