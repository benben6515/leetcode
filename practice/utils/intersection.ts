interface Counter {
  [key: number]: number
}

function intersection(array1: number[], array2: number[]) {
  const result: number[] = []
  const counter: Counter = {}
  array1 = Array.from(new Set(array1))
  array2 = Array.from(new Set(array2))

  array1.forEach((e) => {
    if (!counter?.[e]) counter[e] = 0
    counter[e]++
  })
  array2.forEach((e) => {
    if (!counter?.[e]) counter[e] = 0
    counter[e]++
  })
  Object.entries(counter).forEach(([key, value]: [string, number]) => {
    if (value >= 2) result.push(Number(key))
  })

  return result
}

// test
console.log(intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]))
console.log(intersection([1, 3, 2, 6, 10], [5, 11, 4, 3, 100, 144, 0, 2, 10]))
console.log(intersection([1, 3, 2, 6, 10, 2, 3], [3, 5, 11, 4, 3, 100, 144, 0, 10]))
