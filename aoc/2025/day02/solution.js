import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read input
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
// const input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8')
const lines = input.trim().split('\n')

function part1(lines) {
  // Your solution here
  const ranges = lines[0].split(',')
  const arr = ranges.map((str) => str.split('-').map((e) => +e))
  let result = 0
  for (const [start, end] of arr) {
    for (let i = start; i <= end; i++) {
      if (checkIsValid1(i)) {
        result += i
      }
    }
  }
  return result
}

function checkIsValid1(i) {
  const str = `${i}`
  const n = str.length
  if (n % 2 === 1) return false
  let left = 0
  let right = Math.floor(n / 2)
  while (right < n) {
    if (str[left] !== str[right]) return false
    right++
    left++
  }
  return true
}

function part2(lines) {
  // Your solution here
  const ranges = lines[0].split(',')
  const arr = ranges.map((str) => str.split('-').map((e) => +e))
  let result = 0
  for (const [start, end] of arr) {
    for (let i = start; i <= end; i++) {
      if (checkIsValid2(i)) {
        result += i
      }
    }
  }
  return result
}
function checkIsValid2(i) {
  const str = `${i}`
  const n = str.length

  // for 1, 2, 3, 4, ... group
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    const group = []
    for (let j = 0; j * i < n; j++) {
      group.push(str.slice(i * j, i * (j + 1)))
    }
    if (group.every((e) => e === group[0])) return true
  }
  return false
}

console.log('Part1 : ', part1(lines))
console.log('Part2 : ', part2(lines))
