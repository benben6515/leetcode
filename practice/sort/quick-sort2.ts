export function quickSort(array: number[], left: number = 0, right: number = array.length - 1) {
  if (left >= right) return
  const index = partition(array, left, right)
  quickSort(array, left, index - 1)
  quickSort(array, index + 1, right)
}

function partition(array: number[], left: number, right: number) {
  const pValue = array[right]
  let pIndex = left
  for (let i = left; i < right; i++) {
    if (array[i] < pValue) {
      const temp = array[i]
      array[i] = array[pIndex]
      array[pIndex] = temp
      pIndex++
    }
  }
  const temp = array[right]
  array[right] = array[pIndex]
  array[pIndex] = temp
  return pIndex
}

// test case
const arr = [3.14, 5, -2, 1, 10]
quickSort(arr)
console.log(arr)
