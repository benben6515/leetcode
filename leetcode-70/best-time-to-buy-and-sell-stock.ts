export function maxProfit(prices: number[]): number {
  let left = 0
  let right = 0
  let result = 0

  while (right < prices.length) {
    const current = prices[right] - prices[left]
    if (current > 0) {
      result = Math.max(current, result)
    } else {
      left = right
    }
    right++
  }

  return result
}

// 2025/11/11 done.
// Runtime 3 ms Beats 54.20%
