/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return nums

  let cur = 0
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i])
    max = Math.max(cur, max)
  }

  return max
};


// 2022/05/09 done.
// Runtime: 95 ms, faster than 68.36% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 50.2 MB, less than 73.28% of JavaScript online submissions for Maximum Subarray.
