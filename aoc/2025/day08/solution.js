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

  const distancePair = [] // [dis, p1, p2]
  for (let i = 0; i < positions.length - 1; i++) {
    const p1 = positions[i]
    for (let j = i + 1; j < positions.length; j++) {
      const p2 = positions[j]
      const distanceSquare = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2 + (p1[2] - p2[2]) ** 2
      distancePair.push([distanceSquare, p1, p2])
    }
  }

  distancePair.sort((a, b) => a[0] - b[0])

  const group = []
  let count = 0
  const limit = 1000
  // const limit = 10
  while (count < limit) {
    const p1 = distancePair[count][1]
    const p2 = distancePair[count][2]
    const p1Str = p1.join(',')
    const p2Str = p2.join(',')
    const p1Index = group.findIndex((s) => s.has(p1Str))
    const p2Index = group.findIndex((s) => s.has(p2Str))
    if (p1Index === -1 && p2Index === -1) {
      group.push(new Set([p1Str, p2Str]))
    } else if (p1Index === p2Index) {
      // do nothing
    } else {
      if (p1Index === -1) {
        group[p2Index].add(p1Str)
      } else if (p2Index === -1) {
        group[p1Index].add(p2Str)
      } else {
        const items = Array.from(group[p2Index])
        items.forEach((e) => group[p1Index].add(e))
        group[p1Index].add(p1Str)
        group[p1Index].add(p2Str)
        group.splice(p2Index, 1)
      }
    }
    count++
  }
  group.sort((a, b) => b.size - a.size)

  const s1 = group?.[0]?.size || 1
  const s2 = group?.[1]?.size || 1
  const s3 = group?.[2]?.size || 1
  return s1 * s2 * s3
}

// ⚠️ need practice
function part2(lines) {
  const positions = lines.map((e) => e.split(',').map(Number))
  const n = positions.length

  // every element as a set and the parent is itself
  const parent = new Array(n).fill(null).map((_, i) => i)

  function findParent(x) {
    if (parent[x] !== x) parent[x] = findParent(parent[x])
    return parent[x]
  }

  function union(x, y) {
    const px = findParent(x)
    const py = findParent(y)
    if (px === py) return false
    parent[py] = px
    return true
  }

  const distancePair = []
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const p1 = positions[i]
      const p2 = positions[j]
      const distSq = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2 + (p1[2] - p2[2]) ** 2
      distancePair.push([distSq, i, j])
    }
  }

  distancePair.sort((a, b) => a[0] - b[0])

  let lastPairResult = 0
  let components = n

  for (const [_, i, j] of distancePair) {
    const merged = union(i, j)
    if (merged) {
      components--
      if (components === 1) {
        lastPairResult = positions[i][0] * positions[j][0]
        break
      }
    }
  }

  return lastPairResult
}

console.log('Part1: ', part1(lines))
console.log('Part2: ', part2(lines))
