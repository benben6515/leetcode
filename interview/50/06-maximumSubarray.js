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


// leetcode 0053
