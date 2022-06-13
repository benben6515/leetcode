/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.trim().split(' ')
  return arr[arr.length - 1].length
};

// 2022/06/13 done
// Runtime: 61 ms, faster than 90.52% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 42.5 MB, less than 9.29% of JavaScript online submissions for Length of Last Word.
