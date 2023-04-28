export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array

  const midIndex = Math.floor(array.length / 2)
  const leftArray = array.slice(0, midIndex)
  const rightArray = array.slice(midIndex, array.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(array1: number[], array2: number[]): number[] {
  const result: number[] = []
  let index1 = 0
  let index2 = 0

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      result.push(array1[index1++])
    } else {
      result.push(array2[index2++])
    }
  }

  return [...result, ...array1.slice(index1), ...array2.slice(index2)]
}

const arr = [5, 2, -4, 3.14, 10, 0]
console.log(mergeSort(arr))
