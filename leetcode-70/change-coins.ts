const coins = [1, 3, 4, 5]

function changeCoins(coins: number[], target: number) {
  const dp = new Array(target + 1).fill(target + 1)
  dp[0] = 0
  for (let i = 1; i < target + 1; i++) {
    coins.forEach((c) => {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1)
      }
    })
  }
  return dp[target] === target + 1 ? -1 : dp[target]
}

console.log(changeCoins(coins, 7))
