function createCounter(n: number): () => number {
  return function() {
    return n++
  }
}

export { createCounter }

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// 2023/05/07 done.
// Runtime 66 ms
// Beats 29.11%
// Memory 43.2 MB
// Beats 42.52%
