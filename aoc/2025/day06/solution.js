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
  const numbers = lines.splice(0, lines.length - 1).map((str) =>
    str
      .split(/\s+/)
      .filter((e) => e)
      .map((e) => +e),
  )
  const symbols = lines.at(-1).split(/\s+/)
  let result = 0
  symbols.forEach((s, i) => {
    let current = register[s].element
    numbers.forEach((col) => {
      current = register[s].callback(current, col[i])
    })
    result += current
  })
  return result
}

const register = {
  '*': {
    callback: multiple,
    element: 1,
  },
  '+': {
    callback: add,
    element: 0,
  },
}

function add(a, b) {
  return a + b
}
function multiple(a, b) {
  return a * b
}

function part2(lines) {
  // Your solution here
  const numbers = lines.splice(0, lines.length - 1)
  const symbols = lines.at(-1)
  let result = 0
  for (let i = 0; i < symbols.length; i++) {
    const s = symbols[i]
    if (s === ' ') continue
    let isEnd = false
    let diff = 0
    const arr = []
    while (!isEnd) {
      let str = ''
      numbers.forEach((col) => {
        // if (!col?.[i + diff]) isEnd = true
        if (col[i + diff] !== ' ') str += col?.[i + diff] || ''
      })
      diff++
      if (!str) isEnd = true
      else arr.push(+str)
    }
    const value = arr.reduce((acc, cur) => register[s].callback(acc, cur), register[s].element)
    result += value
  }
  return result
}

// console.log('Part1 : ', part1(lines))
console.log('Part2 : ', part2(lines))
