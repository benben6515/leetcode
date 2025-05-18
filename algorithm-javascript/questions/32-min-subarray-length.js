function minSubLength(arr, target) {
  let left = 0
  let right = 0
  let current = 0
  let result = arr.length + 1

  while (right < arr.length) {
    current += arr[right]

    while (current >= target) {
      result = Math.min(result, right - left + 1)
      current -= arr[left]
      left++
    }

    right++
  }

  return result === arr.length + 1 ? -1 : result
}

console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11))
// 2 // [9, 8]
console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 6))
// 1 // [6]
console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60))
// 4 // [7, 14, 30, 12]

// other solution

// function minSubLength(arr, target) {
//   let result = arr.length + 1
//
//   for (let left = 0; left < arr.length; left++) {
//     let right = left
//     let current = 0
//
//     while (right < arr.length) {
//       current += arr[right]
//       if (current >= target) {
//         result = Math.min(result, right - left + 1)
//       }
//       right++
//     }
//   }
//
//   return result === arr.length + 1 ? -1 : result
// }
