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
  const index = lines.findIndex((e) => e === '')
  const ranges = lines
    .slice(0, index)
    .map((str) => str.split('-').map((e) => +e))
    .sort((a, b) => a[0] - b[0])
  const numbers = lines.slice(index + 1, lines.length).map((e) => +e)
  const mergedRanges = ranges.reduce((acc, cur) => {
    if (acc.length === 0) return [cur]
    const [currentL, currentH] = cur
    const target = acc.pop()
    const [targetL, targetH] = target
    if (currentL > targetH) {
      acc.push(target)
      acc.push(cur)
    } else {
      acc.push([Math.min(currentL, targetL), Math.max(currentH, targetH)])
    }
    return acc
  }, [])
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i]
    for (let j = 0; j < mergedRanges.length; j++) {
      const [low, high] = mergedRanges[j]
      if (n >= low && n <= high) {
        result++
        continue
      }
    }
  }
  return result
}

function part2(lines) {
  // Your solution here
  const index = lines.findIndex((e) => e === '')
  const ranges = lines
    .slice(0, index)
    .map((str) => str.split('-').map((e) => +e))
    .sort((a, b) => a[0] - b[0])
  // const numbers = lines.slice(index + 1, lines.length).map((e) => +e)
  const mergedRanges = ranges.reduce((acc, cur) => {
    if (acc.length === 0) return [cur]
    const [currentL, currentH] = cur
    const target = acc.pop()
    const [targetL, targetH] = target
    if (currentL > targetH) {
      acc.push(target)
      acc.push(cur)
    } else {
      acc.push([Math.min(currentL, targetL), Math.max(currentH, targetH)])
    }
    return acc
  }, [])
  let result = 0
  mergedRanges.forEach((range) => {
    const [low, high] = range
    result = result + high - low + 1
  })
  return result
}

console.log('Part1 : ', part1(lines))
console.log('Part2: ', part2(lines))
