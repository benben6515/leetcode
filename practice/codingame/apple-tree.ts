/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// @ts-ignore
import readline from 'readline'

interface DataType {
  x: number
  y: number
  z: number
  r: number
}

var inputs: string[] = readline().split(' ');
const N: number = parseInt(inputs[0]);
const index: number = parseInt(inputs[1]);
const data: DataType[] = []
for (let i = 0; i < N; i++) {
    var inputs: string[] = readline().split(' ');
    const x: number = parseInt(inputs[0]);
    const y: number = parseInt(inputs[1]);
    const z: number = parseInt(inputs[2]);
    const r: number = parseInt(inputs[3]);
    data.push({ x, y, z, r })
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

const dropping = new Set<number>().add(index)
const dropped = new Set<number>().add(index)
const result = new Set<number>()
data.forEach((e, i) => result.add(i))

function distance(a, b) {
  return Math.pow((a.x - b.x) ** 2 + (a.y - b.y) ** 2, 1/2)
}

function isCollide(target, current) {
  if (data[target].z >= data[current].z) {
    if (distance(data[target], data[current]) < (data[target].r + data[current].r))
      return true
  }
  return false
}

while (dropping.size) {
  dropping.forEach(e => {
    result.forEach(item => {
      const isSame = e === item

      if(!isSame && isCollide(e, item)) {
        if (!dropped.has(item)) {
          dropping.add(item)
        }
        result.delete(item)
        dropped.add(item)
      }
    })
    dropping.delete(e)
    result.delete(e)
  })
}
dropped.forEach(e => result.delete(e))

console.log(result.size)

// ref: https://www.codingame.com/ide/puzzle/apple-tree
// 2022.06.12 done
