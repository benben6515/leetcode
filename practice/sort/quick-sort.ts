function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array

  const pivot = array[0]
  const lesser: number[] = []
  const greater: number[] = []

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) lesser.push(array[i])
    else greater.push(array[i])
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)]
}

const arr = [3.14, 5, -2, 1, 10]
console.log(quickSort(arr))
