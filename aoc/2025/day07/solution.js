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
  let currentIndexs = []
  lines = lines.map((e) => e.split(''))
  lines[0].forEach((s, i) => {
    if (s === 'S') currentIndexs.push(i)
  })
  let result = 0
  for (let i = 1; i < lines.length; i++) {
    let current = []

    for (let j = 0; j < lines[i].length; j++) {
      if (!currentIndexs.includes(j)) continue
      if (lines[i][j] === '.') {
        lines[i][j] = '|'
        current.push(j)
      }
      if (lines[i][j] === '^') {
        result++
        if (lines[i]?.[j - 1] === '.') {
          lines[i][j - 1] = '|'
          current.push(j - 1)
        }
        if (lines[i]?.[j + 1] === '.') {
          lines[i][j + 1] = '|'
          current.push(j + 1)
        }
      }
    }
    currentIndexs = current
  }
  return result
}

function part2(lines) {
  // Your solution here
  let currentIndexsMap = {}
  let startIndex = 0
  lines = lines.map((e) => e.split(''))
  lines[0].forEach((s, i) => {
    if (s === 'S') {
      currentIndexsMap[i] = 1
      startIndex = i
    }
  })
  let result = 0
  for (let i = 1; i < lines.length; i++) {
    let current = {}
    for (let j = 0; j < lines[i].length; j++) {
      const keys = Object.keys(currentIndexsMap).map((e) => +e)
      if (!keys.includes(j)) continue
      if (lines[i][j] === '.') {
        lines[i][j] = currentIndexsMap[j]
        current[j] = currentIndexsMap[j]
      }
      if (lines[i][j] === '^') {
        const leftKey = j - 1
        if (lines[i]?.[leftKey] && lines[i]?.[leftKey] !== '^') {
          if (current?.[leftKey]) {
            current[leftKey] += currentIndexsMap[j]
          } else {
            const topValue = typeof currentIndexsMap?.[leftKey] === 'number' ? currentIndexsMap[leftKey] : 0
            current[leftKey] = currentIndexsMap[j] + topValue
          }
          lines[i][leftKey] = current[leftKey]
        }
        const rightKey = j + 1
        if (lines[i]?.[rightKey] && lines[i]?.[rightKey] !== '^') {
          if (current?.[rightKey]) {
            current[rightKey] += currentIndexsMap[j]
          } else {
            const topValue = typeof currentIndexsMap?.[rightKey] === 'number' ? currentIndexsMap[rightKey] : 0
            current[rightKey] = currentIndexsMap[j] + topValue
          }
          lines[i][rightKey] = current[rightKey]
        }
      }
    }
    currentIndexsMap = current
  }

  result = Object.values(currentIndexsMap).reduce((a, b) => a + b, 0)
  return result
}

console.log('Part1 : ', part1(lines))
console.log('Part2: ', part2(lines))
