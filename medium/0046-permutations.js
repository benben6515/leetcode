/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  let result = []
  const track = []
  backtrack(nums, track, result)
  return result
};

const backtrack = (nums, track, result) => {
  if (track.length === nums.length) {
    result.push(track.slice())
  }
  for (let i = 0; i < nums.length; i++) {
    if (track.includes(nums[i])) continue
    track.push(nums[i])
    backtrack(nums, track, result)
    track.pop()
  }
}

// 2022/03/29 done
// Runtime: 105 ms, faster than 46.47% of JavaScript online submissions for Permutations.
// Memory Usage: 45.2 MB, less than 49.01% of JavaScript online submissions for Permutations.
