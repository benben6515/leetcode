export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let left = 0
  let right = Math.min(k, nums.length)

  const hashMap = new Map()
  for (let i = left; i < right; i++) {
    const key = nums[i]
    if (!hashMap.has(key)) {
      hashMap.set(key, 0)
    }
    const value = hashMap.get(key)
    if (value >= 1) return true
    hashMap.set(key, value + 1)
  }

  while (right <= nums.length) {
    const rightKey = nums[right]
    if (!hashMap.has(rightKey)) {
      hashMap.set(rightKey, 0)
    }
    const rightValue = hashMap.get(rightKey)
    if (rightValue >= 1) return true
    hashMap.set(rightKey, rightValue + 1)

    const leftKey = nums[left]
    const leftValue = hashMap.get(leftKey)
    hashMap.set(leftKey, leftValue - 1)

    left++
    right++
  }
  return false
}
