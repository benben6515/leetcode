export function numIslands(grid: string[][]): number {
  const m = grid.length
  const n = grid[0].length
  const visited = new Set<string>()
  let result = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') continue
      if (!visited.has(`${i},${j}`)) {
        bfs(grid, [i, j])
        result++
      }
    }
  }

  function bfs(grid: string[][], root: number[]) {
    const dir = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
    const queue: number[][] = [root]
    while (queue.length) {
      const point = queue.shift() as number[]
      visited.add(point.join(','))
      dir.forEach((d) => {
        const newPoint: number[] = [point[0] + d[0], point[1] + d[1]]
        const i = newPoint[0]
        const j = newPoint[1]
        const newPointStr = `${i},${j}`
        if (checkBound(newPoint, m, n) && grid?.[i]?.[j] === '1' && !visited.has(newPointStr)) {
          queue.push(newPoint)
          visited.add(newPointStr)
        }
      })
    }
  }

  return result
}

function checkBound(point: number[], m: number, n: number) {
  const x = point[0]
  const y = point[1]
  return x >= 0 && y >= 0 && x < m && y < n
}

// 2025/11/08 done.
// Runtime 121 ms Beats 10.44%
// Memory 70.63 MB Beats 8.89%
