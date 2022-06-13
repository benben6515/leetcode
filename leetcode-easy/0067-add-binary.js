/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a.length < b.length) return addBinary(b, a)
  const arrA = a.split('').reverse()
  const arrB = b.split('').reverse()
  let curry = 0
  let sum = 0

  arrA.forEach((e, i) => {
    let numB = 0
    if (i < arrB.length) numB = +(arrB[i])
    sum = curry + (+e) + numB
    switch (sum) {
      case 0:
        arrA[i] = '0'
        curry = 0
        break
      case 1:
        arrA[i] = '1'
        curry = 0
        break
      case 2:
        arrA[i] = '0'
        curry = 1
        break
      case 3:
        arrA[i] = '1'
        curry = 1
        break
    }
  })

  if (curry) arrA.push('1')
  return arrA.reverse().join('')
};

// 2022/06/13 done.
// Runtime: 105 ms, faster than 28.95% of JavaScript online submissions for Add Binary.
// Memory Usage: 42.6 MB, less than 80.31% of JavaScript online submissions for Add Binary.
