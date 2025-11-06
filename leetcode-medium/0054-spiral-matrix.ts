export function spiralOrder(matrix: number[][]): number[] {
  const m = matrix[0]?.length || 0
  const n = matrix?.length || 0
  const totalPoint = m * n
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let dirIndex = 0

  const visited: string[] = []

  let current = [0, 0]
  while (visited.length < totalPoint) {
    const currentStr = current.join(',')
    if (!visited.includes(currentStr)) {
      visited.push(currentStr)
    }
    const diffX = dir[dirIndex][0]
    const diffY = dir[dirIndex][1]
    const newPoint = [current[0] + diffX, current[1] + diffY]
    const newPointStr = newPoint.join(',')
    if (checkBound(newPoint, m, n) && !visited.includes(newPointStr)) {
      current = newPoint
    } else {
      dirIndex = (dirIndex + 1) % 4
    }
  }

  return visited.map((str) => {
    const [x, y] = str.split(',')
    return matrix[x][y]
  })
}

function checkBound(point: number[], m: number, n: number) {
  const x = point[0]
  const y = point[1]
  return x >= 0 && y >= 0 && x < n && y < m
}

// 2025/11/06 done.
// Runtime 1 ms Beats 12.59%
// Memory 55.32 MB Beats 40.51%
