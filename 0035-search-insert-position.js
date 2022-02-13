/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = 0
  
  if (target <= nums[left]) return 0
  if (target > nums[right]) return nums.length
  if (target === nums[right]) return nums.length - 1
  
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    
    if (target === nums[mid]) return mid
    
    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (target > nums[mid] && target < nums[mid + 1]) return mid + 1
  return mid
};

// 2022.02.13 done
// Runtime: 56 ms, faster than 99.29% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 42.4 MB, less than 8.36% of JavaScript online submissions for Search Insert Position.
