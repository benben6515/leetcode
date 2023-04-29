function quickSort2(array: number[], left: number = 0, right: number = array.length - 1) {
  if (left >= right) return
  const index = partition2(array, left, right)
  quickSort2(array, left, index - 1)
  quickSort2(array, index + 1, right)
}

function partition2(array: number[], left: number, right: number) {
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

const arr2 = [3.14, 5, -2, 1, 10]
quickSort2(arr2)
console.log(arr2)
