export function maxEnvelopes(envelopes: number[][]): number {
  const n = envelopes.length
  envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1])
  const nums = envelopes.map((e) => e[1])
  const dp: number[] = []
  dp.push(nums[0])

  let lis = 1
  for (let i = 1; i < n; i++) {
    if (dp[dp.length - 1] < nums[i]) {
      dp.push(nums[i])
      lis++
      continue
    }

    let left = 0
    let right = dp.length - 1
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (dp[mid] < nums[i]) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    dp[left] = nums[i]
  }

  return lis
}

// 2025/11/28 done.
// Runtime 66 ms Beats 62.50%
// Memory 81.25 MB Beats 50.00%
