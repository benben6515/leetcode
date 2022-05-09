/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return nums

  const prefix = [0]
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = nums[i] + prefix[i]
  }

  const table = {}
  for (let i = 0; i < prefix.length; i++) {
    // key must in string !!!
    if (!Object.keys(table).includes(`${prefix[i]}`)) {
      table[prefix[i]] = i
    }
  }

  let start = 0
  let end = 0
  let maxSum = -Infinity
  let minValue = prefix[0]

  for (let i = 1; i < prefix.length + 1; i++) {
    if (prefix[i] - minValue > maxSum) {
      start = table[minValue]
      end = i
      maxSum = prefix[i] - minValue
    } else if (prefix[i] - minValue === maxSum) {
      const length = i - table[minValue]
      if (length > end - start) {
        start = table[minValue]
        end = i
      }
    }
    minValue = Math.min(minValue, prefix[i])
  }

  return nums.slice(start, end)
};


// like leetcode 0053 but must return longest subarray

console.log(maxSubArray([3, -1, 3, -1, -5, 5, -1, -9]))
// [3, -1, 3]
console.log(maxSubArray([-200, 100, -100, 200, -200, 200, -300]))
// [100, -100, 200, -200, 200]
