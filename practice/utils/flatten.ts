function flatten(array: any[]) {
  const result: number[] = []
  falttenHelper(array, result)
  return result
}
function falttenHelper(array: any[], result: number[]) {
  array.forEach((e) => {
    if (Array.isArray(e)) falttenHelper(e, result)
    else result.push(e)
  })
}

// test
console.log(flatten([1, 2, [3, 4], [5, [8]]]))
