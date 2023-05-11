type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i])
  }
  return acc
}

// 2023/05/11 done
// Runtime 65 ms Beats 61.38%
// Memory 44.5 MB Beats 74.90%
