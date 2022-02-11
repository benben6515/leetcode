/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {}
  
  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(target - nums[i])) {
      obj[nums[i]] = i
    } else {
      return [obj[ target - nums[i] ], i]
    }
  }
  
};

// 2022.02.11 done
