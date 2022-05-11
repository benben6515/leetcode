/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')

  let left = 0
  let right = str.length - 1
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
};

// 2022/05/11 done.
// Runtime: 110 ms, faster than 36.67% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 44.2 MB, less than 82.99% of JavaScript online submissions for Valid Palindrome.
