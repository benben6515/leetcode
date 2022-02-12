const arr = [5, 2, -4, 3.14, 10, 0]

const sort = (array) => {

  const mergeSort = (arr) => {
    const { length } = arr
    if (length < 2) return arr
    const mid = Math.floor(length / 2)
    const arrL = arr.slice(0, mid)
    const arrR = arr.slice(mid, length)
    return merge(mergeSort(arrL), mergeSort(arrR))
  }

  const merge = (arrL, arrR) => {
    const result = []
    let indexL = 0
    let indexR = 0
    while (indexL < arrL.length && indexR < arrR.length) {
      if (arrL[indexL] < arrR[indexR]) {
        result.push(arrL[indexL])
        indexL++
      } else {
        result.push(arrR[indexR])
        indexR++
      }
    }
    return result.concat(arrL.slice(indexL)).concat(arrR.slice(indexR))
  }

  return mergeSort(array)
}

console.log(sort(arr))
