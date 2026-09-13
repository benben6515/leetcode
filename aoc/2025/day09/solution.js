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
  const positions = lines.map((e) => e.split(',').map(Number))
  const n = positions.length
  let result = 0
  for (let i = 0; i < n - 1; i++) {
    const p1 = positions[i]
    for (let j = i + 1; j < n; j++) {
      const p2 = positions[j]
      const width = Math.abs(p1[0] - p2[0]) + 1
      const height = Math.abs(p1[1] - p2[1]) + 1
      const area = width * height
      if (area > result) {
        result = area
      }
    }
  }
  return result
}

function part2(lines) {
  // Your solution here
  const positions = lines.map((e) => {
    const [i, j] = e.split(',').map(Number)
    return [j, i]
  })

  const n = positions.length
  let maxX = 0
  let maxY = 0
  positions.forEach(([x, y]) => {
    if (x > maxX) maxX = x
    if (y > maxY) maxY = y
  })
  // const grid = new Array(maxX + 1).fill(null).map((e) => new Array(maxY + 1).fill('.'))
  console.log(grid.map((a) => a.join('')))
  const allowed = new Set()
  const toKey = ([x, y]) => `${x},${y}`
  const toPosition = (key) => key.split(',').map(Number)
  positions.forEach((position) => {
    const key = toKey(position)
    allowed.add(key)
  })

  for (let i = 0; i < maxY; i++) {
    if (grid[i].includes('#')) {
      const start = grid[i].indexOf('#')
      const end = grid[i].lastIndexOf('#')
      for (let j = start; j < end; j++) {
        grid[i][j] = '#'
      }
    }
  }
  for (let i = 0; i < grid[0].length; i++) {
    const index = []
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === '#') index.push(j)
    }
    if (index.length) {
      const start = index[0]
      const end = index.at(-1)
      for (let j = start; j < end; j++) {
        grid[j][i] = '#'
      }
    }
  }

  // console.log(grid.map((a) => a.join('')))

  let result = 0
  // for (let i = 0; i < n - 1; i++) {
  //   const p1 = positions[i]
  //   for (let j = i + 1; j < n; j++) {
  //     const p2 = positions[j]
  //     const vetor = [p2[0] - p1[0], p2[1] - p1[1]]
  //     if (p1[0] !== p2[0] && p1[1] !== p2[1]) {
  //       const [p3X, p3Y] = [p1[0] + vetor[0], p1[1]]
  //       const [p4X, p4Y] = [p1[0], p1[1] + vetor[1]]
  //       if (grid[p3X][p3Y] !== '#') continue
  //       if (grid[p4X][p4Y] !== '#') continue
  //     }
  //     const width = Math.abs(p1[0] - p2[0]) + 1
  //     const height = Math.abs(p1[1] - p2[1]) + 1
  //     const area = width * height
  //     if (area > result) {
  //       result = area
  //     }
  //   }
  // }
  return result
}

console.log('Part1: ', part1(lines))
console.log('Part2: ', part2(lines))
