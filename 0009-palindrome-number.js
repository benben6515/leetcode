/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || x > Math.pow(2, 31) - 1) return false
  let str = x.toString().split('')
  let reNum = Number(str.reverse().join(''))
  return reNum === x
};

// 2022.02.11 done
