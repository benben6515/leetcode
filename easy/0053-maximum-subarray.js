/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const { length } = nums
  if (length === 1) return nums[0]
  
  const resultArr = []
  for (let i = 1; i < length + 1; i++) {
    resultArr.push(maxSum(nums, i))
  }
  return Math.max(...resultArr)
};

const maxSum = (nums, size) => {
  let maxValue = 0
  for (let i = 0; i < size; i++) {
    maxValue += nums[i]
  }
  
  let tempValue = maxValue
  for (let j = size; j < nums.length; j++) {
    tempValue = tempValue + nums[j] - nums[j - size]
    if (tempValue > maxValue) {
      maxValue = tempValue
    }
  }
  return maxValue
}

// TO FIX 
