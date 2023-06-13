export function hasSingleCycle(array: number[]) {
  // Write your code here.
  const { length } = array
  let isOverLength = false
  const totalJumps = array.reduce((acc, cur) => {
    if (acc + cur >= length) isOverLength = true
    return acc + cur
  })
  return totalJumps === 0 ? isOverLength : totalJumps % array.length === 0
}
