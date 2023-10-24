export function minimumWaitingTime(queries: number[]) {
  // Write your code here.
  queries.sort((a, b) => a - b)

  let result = 0
  let current = 0
  for (let i = 0; i < queries.length - 1; i++) {
    current += queries[i]
    result += current
  }
  return result
}

// 2023-10-24 Done.
