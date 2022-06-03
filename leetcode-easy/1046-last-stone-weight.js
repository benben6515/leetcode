/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let current1 = 0
  let current2 = 0

  while (stones.length > 1) {
    current1 = stones.splice(stones.indexOf(Math.max(...stones)), 1)
    current2 = stones.splice(stones.indexOf(Math.max(...stones)), 1)
    if (current1 === current2) continue
    stones.push(current1 - current2)
  }

  return stones[0]
};

// 2022/06/03 done.
// Runtime: 64 ms, faster than 88.79% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 42.1 MB, less than 93.27% of JavaScript online submissions for Last Stone Weight.
