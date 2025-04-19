averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)

function averagePair(arr, average) {
  let left = 0
  let right = arr.length - 1
  const result = []

  while (left < right) {
    const current = (arr[left] + arr[right]) / 2

    if (current === average) {
      result.push([arr[left], arr[right]])
      right--
      left++
    } else if (current < average) {
      left++
    } else if (current > average) {
      right--
    }
  }
  return result
}
