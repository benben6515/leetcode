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
