const arr = [3.14, 5, -2, 1, 10]

const sort = (array) => {
  const quickSort = (arr, left, right) => {
    if (left >= right) return
    const index = partition(arr, left, right)
    quickSort(arr, left, index - 1)
    quickSort(arr, index + 1, right)
  }
  const partition = (arr, left, right) => {
    const pValue = arr[right]
    let pIndex = left
    for (let i = left; i < right; i++) {
      if (arr[i] < pValue) {
        const temp = arr[i]
        arr[i] = arr[pIndex]
        arr[pIndex] = temp
        pIndex++
      }
    }
    const temp = arr[pIndex]
    arr[pIndex] = arr[right]
    arr[right] = temp
    return pIndex
  }
  quickSort(array, 0, array.length - 1)
  return array
}

console.log(sort(arr))
