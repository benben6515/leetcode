/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]

  for (let i = 0; i < intervals.length; i++) {
    if (result[result.length - 1][1] < intervals[i][0]) {
      result.push(intervals[i])
    } else {
      result[result.length - 1] =  [
        result[result.length - 1][0],
        Math.max(result[result.length - 1][1], intervals[i][1])
      ]
    }
  }
  return result
};

// 2022/05/08 done.
// Runtime: 183 ms, faster than 22.34% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 49 MB, less than 60.22% of JavaScript online submissions for Merge Intervals.
