export function countSquares(points: number[][]) {
  // Write our code here.
  const set = new Set([...points.map((e) => e.join(','))])
  let result = 0

  for (let i = 0; i < points.length; i++) {
    const pointA = points[i]
    for (let j = i + 1; j < points.length; j++) {
      const pointB = points[j]

      // mid point
      const midX = (pointA[0] + pointB[0]) / 2
      const midY = (pointA[1] + pointB[1]) / 2

      // main
      const xDistanceFromMid = pointA[0] - midX
      const yDistanceFromMid = pointA[1] - midY

      // other two points
      const pointC = [midX + yDistanceFromMid, midY - xDistanceFromMid]
      const pointD = [midX - yDistanceFromMid, midY + xDistanceFromMid]

      // check two points
      if (set.has(pointC.join(',')) && set.has(pointD.join(','))) {
        result++
      }
    }
  }

  return result / 2
}

// sample input
const points = [
  [1, 1],
  [0, 0],
  [-4, 2],
  [-2, -1],
  [0, 1],
  [1, 0],
  [-1, 4],
]

// sample output
const result = 2 // [1, 1], [0, 0], [0, 1], and [1, 0] makes a square,
// as does [1, 1], [-4, 2], [-2, -1], and [-1, 4]

console.log(countSquares(points))
// 2
