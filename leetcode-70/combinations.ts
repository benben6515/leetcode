export function combine(n: number, k: number): number[][] {
  const result: number[][] = []

  function backtrack(start: number, path: number[]) {
    if (path.length === k) {
      result.push(path.slice())
      return
    }
    for (let i = start; i < n + 1; i++) {
      path.push(i)
      backtrack(i + 1, path)
      path.pop()
    }
  }

  backtrack(1, [])
  return result
}
