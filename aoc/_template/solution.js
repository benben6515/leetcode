import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read input
const input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8')
// const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const lines = input.trim().split('\n')

function part1(lines) {
  // Your solution here
  return 0
}

function part2(lines) {
  // Your solution here
  return 0
}

console.log('Part1: ', part1(lines))
console.log('Part2: ', part2(lines))
