/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

  const total = nums1.length + nums2.length
  const half = Math.floor(total / 2)

  let left = 0
  let right = nums1.length - 1
  let i
  let j

  while (true) {
    i = Math.floor((left + right) / 2)
    j = half - i - 2

    let nums1Left = i >= 0 ? nums1[i] : -Infinity
    let nums1Right = i + 1 < nums1.length ? nums1[i + 1] : Infinity
    let nums2Left = j >= 0 ? nums2[j] : -Infinity
    let nums2Right = j + 1 < nums2.length ? nums2[j + 1] : Infinity

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (total % 2) return Math.min(nums1Right, nums2Right)
      return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2
    } else if (nums1Left > nums2Right) {
      right = i - 1
    } else {
      left = i + 1
    }
  }
};

// 2022/05/15 done
// Runtime: 158 ms, faster than 46.41% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 45.8 MB, less than 98.37% of JavaScript online submissions for Median of Two Sorted Arrays.
