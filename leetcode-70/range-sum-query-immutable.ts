class NumArray {
  private dp = [0]
  constructor(nums: number[]) {
    let current = 0
    nums.forEach((e) => {
      current += e
      this.dp.push(current)
    })
  }

  sumRange(left: number, right: number): number {
    return this.dp[right + 1] - this.dp[left]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// 2025/12/17 done.
// Runtime 5 ms Beats 86.35%
// Memory 63.64 MB Beats 54.26%
