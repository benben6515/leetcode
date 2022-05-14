/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = new Map

  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1)
    } else {
      return true
    }
  }

  return false
};

// 2022/05/14 done.
// Runtime: 83 ms, faster than 92.94% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 51 MB, less than 52.81% of JavaScript online submissions for Contains Duplicate.
