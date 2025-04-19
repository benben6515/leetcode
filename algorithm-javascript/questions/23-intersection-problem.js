const arr1 = [1, 2, 3, 5, 8]
const arr2 = [2, 3, 6, 9, 1]

function getIntersection(arr1, arr2) {
  const result = []
  arr1.forEach((e1) => {
    arr2.forEach((e2) => {
      if (e1 === e2) result.push(e2)
    })
  })
  return result
}

console.log(getIntersection(arr1, arr2))
