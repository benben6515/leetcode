import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read input
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const lines = input.trim().split('\n')

function solution(lines) {
  // Your solution here
  return 0
}

console.log('Result: ', solution(lines))
