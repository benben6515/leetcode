export function permute(nums: number[]): number[][] {
  const result: number[][] = []

  function backtrack(start: number, end: number) {
    if (start === end) {
      result.push(nums.slice())
      return
    }
    for (let i = start; i < end; i++) {
      swap(i, start, nums)
      backtrack(start + 1, end)
      swap(i, start, nums)
    }
  }

  backtrack(0, nums.length)
  return result
}

function swap(i: number, j: number, arr: number[]) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
