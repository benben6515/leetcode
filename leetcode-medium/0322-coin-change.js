/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

let memo = []

var coinChange = function (coins, amount) {
  // init memo with `value -2` and `length amount + 1`
  memo = Array(amount + 1).fill(-2)

  return dp(coins, amount)
}

function dp(coins, amount) {
  if (amount === 0) return 0
  if (amount < 0) return -1
  if (memo[amount] !== -2) return memo[amount]

  let res = Infinity
  for (let i = 0; i < coins.length; i++) {
    let curNumber = dp(coins, amount - coins[i])
    if (curNumber === -1) continue
    res = Math.min(res, curNumber + 1)
  }
  memo[amount] = res === Infinity ? -1 : res
  return memo[amount]
}

// 2022/03/27 done
// Runtime: 219 ms, faster than 37.88% of JavaScript online submissions for Coin Change.
// Memory Usage: 46.3 MB, less than 64.86% of JavaScript online submissions for Coin Change.
