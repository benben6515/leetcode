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
// Runtime: 148 ms, faster than 11.27% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 44 MB, less than 93.33% of JavaScript online submissions for Valid Palindrome.
