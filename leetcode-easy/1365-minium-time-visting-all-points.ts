export function minTimeToVisitAllPoints(points: number[][]): number {
  let result = 0
  for (let i = 1; i < points.length; i++) {
    const current = points[i]
    const previous = points[i - 1]
    const diffX = Math.abs(current[0] - previous[0])
    const diffY = Math.abs(current[1] - previous[1])
    result += Math.max(diffX, diffY)
  }
  return result
}

// 2025/11/05 done.
// Runtime 1 ms Beats 61.90%
// Memory 55.66 MB Beats 95.24%
