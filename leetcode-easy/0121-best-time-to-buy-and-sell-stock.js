/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0
  let left = 0
  let right = 0
  let max = -Infinity

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= prices[left]) {
      left = i
      right = i
      continue
    }
    right++
    max = Math.max(max, prices[right] - prices[left])
  }
  return (max === -Infinity) ? 0 : max
};

// 2022/05/14 done.
// Runtime: 118 ms, faster than 40.41% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 51 MB, less than 99.58% of JavaScript online submissions for Best Time to Buy and Sell Stock.
