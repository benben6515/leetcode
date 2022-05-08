/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) return mid
    if (nums[left] === target) return left
    if (nums[right] === target) return right
    if (nums[mid] < target) {
      left = mid + 1
      right--
    } else {
      right = mid - 1
      left++
    }
  }
  return -1
};

// 2022/04/11 done.
// Runtime: 60 ms, faster than 97.36% of JavaScript online submissions for Binary Search.
// Memory Usage: 44.9 MB, less than 83.19% of JavaScript online submissions for Binary Search.
