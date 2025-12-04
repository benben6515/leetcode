import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read input
// const input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const lines = input.trim().split('\n')

function part1(lines) {
  // Your solution here
  let result = 0
  const grid = lines.map((line) => line.split(''))
  for (let i in grid) {
    for (let j in grid[0]) {
      if (grid[i][j] === '@' && checkIsValid([i, j], grid)) {
        result++
      }
    }
  }
  return result
}
// 0,0 0,1 0,2 ... => y
// 1,0 1,1
// ...
// v
// x
function checkIsValid([x, y], grid) {
  let count = 0
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ]
  dirs.forEach((dir) => {
    const nextX = +x + dir[0]
    const nextY = +y + dir[1]
    if (checkBoundary([nextX, nextY], grid) && grid?.[nextX]?.[nextY] === '@') {
      count++
    }
  })
  if (count < 4) return true
  return false
}
function checkBoundary([x, y], grid) {
  const xLength = grid.legnth
  const yLength = grid[0].length
  if (x < 0 || x > xLength || y < 0 || y > yLength) return false
  return true
}

function part2(lines) {
  // Your solution here
  let result = 0
  const grid = lines.map((line) => line.split(''))

  function getCount() {
    let count = 0
    for (let i in grid) {
      for (let j in grid[0]) {
        if (grid[i][j] === '@' && checkIsValid([i, j], grid)) {
          grid[i][j] = 'x'
          count++
        }
      }
    }
    return count
  }

  let current = getCount()
  while (current) {
    result += current
    current = getCount()
  }

  // console.log(grid.map((e) => e.join('')).join('\n'))
  return result
}

console.log('Part1 : ', part1(lines))
console.log('Part2: ', part2(lines))
