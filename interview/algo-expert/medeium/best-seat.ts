export function bestSeat(seats: number[]) {
  // Write your code here.
  const { length } = seats
  let bestSeat = -1
  let maxSpace = 0 // [0, 0, 0, ...]

  let left = 0
  while (left < length) {
    let right = left + 1
    while (right < length && seats[right] === 0) {
      right++
    }
    const currentSpace = right - left - 1
    if (currentSpace > maxSpace) {
      bestSeat = Math.floor((left + right) / 2)
      maxSpace = currentSpace
    }
    left = right
  }
  return bestSeat
}

// 2023-10-24 Done.
