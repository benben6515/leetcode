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
}

// leetcode 0053
