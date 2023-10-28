export function riverSizes(matrix: number[][]) {
  // Write your code here.
  const result: number[] = []
  const height = matrix.length || 0
  const width = matrix?.[0].length || 0

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 1) {
        result.push(getSize(i, j, matrix))
      }
    }
  }
  return result
}

function getSize(i: number, j: number, matrix: number[][]) {
  let currentSize = 1
  matrix[i][j] = 0
  if (matrix?.[i + 1]?.[j] === 1) currentSize += getSize(i + 1, j, matrix)
  if (matrix?.[i - 1]?.[j] === 1) currentSize += getSize(i - 1, j, matrix)
  if (matrix?.[i]?.[j + 1] === 1) currentSize += getSize(i, j + 1, matrix)
  if (matrix?.[i]?.[j - 1] === 1) currentSize += getSize(i, j - 1, matrix)
  return currentSize
}

// 2023/10/28 Done.
//
