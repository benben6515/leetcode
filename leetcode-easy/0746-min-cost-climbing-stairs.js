/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  if (cost.length < 3) Math.min(cost[0], cost[1])

  cost.push(0)
  for (let i = cost.length - 3; i > -1; i--) {
    cost[i] = cost[i] + Math.min(cost[i + 1], cost[i + 2])
  }

  return Math.min(cost[0], cost[1])
};

// 2022/07/18 done.
// Runtime: 110 ms, faster than 31.22% of JavaScript online submissions for Min Cost Climbing Stairs.
// Memory Usage: 44.3 MB, less than 29.22% of JavaScript online submissions for Min Cost Climbing Stairs.
