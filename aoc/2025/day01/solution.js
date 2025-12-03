import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read input
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
// const input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8')
const lines = input.trim().split('\n')

// Part 1
function part1(lines) {
  // Your solution here
  const arr = lines
  let current = 50
  let result = 0
  arr.forEach((e) => {
    const n = parseString(e)
    current = current + n
    while (current > 99) {
      current = current - 100
    }
    while (current < 0) {
      current = current + 100
    }
    if (current === 0) {
      result++
    }
  })
  return result
}

// Part 2
function part2(lines) {
  // Your solution here
  const arr = lines
  let current = 50
  let result = 0
  for (const e of arr) {
    let n = parseString(e)
    if (n < 0) {
      result += Math.abs(Math.ceil(n / 100))
      n = n % 100
    } else if (n > 0) {
      result += Math.floor(n / 100)
      n = n % 100
    }

    const previous = current
    current = current + n
    if (current > 99) {
      current = current - 100
      if (current !== 0 && previous !== 0) result++
    }
    if (current < 0) {
      current = current + 100
      if (current !== 0 && previous !== 0) result++
    }
    if (current === 0 && previous !== 0) {
      result++
    }
  }
  return result
}

function parseString(str) {
  if (str.includes('R')) {
    return +str.split('R')[1]
  } else if (str.includes('L')) {
    return -1 * +str.split('L')[1]
  } else {
    throw new Error('Input invalid')
  }
}

console.log('Part 1:', part1(lines))
console.log('Part 2:', part2(lines))
