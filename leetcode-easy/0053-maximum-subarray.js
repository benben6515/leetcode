/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return nums

  let cur = nums[0]
  let curMax = 0
  let res = cur

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], cur + nums[i])
    cur = curMax
    res = Math.max(res, curMax)
  }

  return res
};

// 2022/05/09 done.
// Runtime: 109 ms, faster than 48.46% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 50.4 MB, less than 48.90% of JavaScript online submissions for Maximum Subarray.
