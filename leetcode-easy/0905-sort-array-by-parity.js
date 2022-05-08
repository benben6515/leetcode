/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let evenIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const temp = nums[i]
      nums[i] = nums[evenIndex]
      nums[evenIndex] = temp
      evenIndex++
    }
  }
  return nums
};

// 2022/03/30 done
// Runtime: 64 ms, faster than 99.47% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 44.8 MB, less than 50.15% of JavaScript online submissions for Sort Array By Parity.
