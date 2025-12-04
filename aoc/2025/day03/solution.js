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
  const arr = lines.map((e) => e.split('').map((e) => +e))
  let dp = new Array(arr.length).fill(0)
  arr.forEach((numbers, index) => {
    const n = numbers.length
    let left = 0
    let right = 0
    while (left < n - 1) {
      if (left > 0 && numbers[left] < Math.floor(dp[index] / 10)) {
        left++
      } else {
        right = left + 1
        while (right < n) {
          const current = numbers[left] * 10 + numbers[right]
          dp[index] = Math.max(dp[index], current)
          right++
        }
        left++
      }
    }
  })
  return dp.reduce((acc, cur) => acc + cur)
}

function part2(lines) {
  // Your solution here
  const arr = lines.map((e) => e.split('').map((e) => +e))
  let result = 0
  arr.forEach((numbers) => {
    const n = numbers.length
    let needed = 12
    let index = 0
    let current = ''

    for (let i = 0; i < needed; i++) {
      const limit = n - needed + i
      let bestDigit = 0
      let bestIndex = 0

      for (let j = index; j <= limit; j++) {
        if (numbers[j] > bestDigit) {
          bestDigit = numbers[j]
          bestIndex = j
        }
      }
      current += `${bestDigit}`
      index = bestIndex + 1
    }
    result += +current
  })
  return result
}

console.log('Part1: ', part1(lines))
console.log('Part2: ', part2(lines))
