/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let prev = 1
  let step = 1
  for (let i = 2; i < n + 1; i++) {
    let temp = step
    step = prev + step
    prev = temp
  }
  return step
};

// 2022/07/06 done.
// Runtime: 58 ms, faster than 96.04% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 42.1 MB, less than 30.47% of JavaScript online submissions for Climbing Stairs.
