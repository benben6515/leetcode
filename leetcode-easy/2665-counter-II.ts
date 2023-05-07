type ReturnObj = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

function createCounter(init: number): ReturnObj {
  let currentValue = init

  return {
    increment() {
      currentValue++
      return currentValue
    },
    decrement() {
      currentValue--
      return currentValue
    },
    reset() {
      currentValue = init
      return currentValue
    },
  }
}

export { createCounter }

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// 2023/05/07 done
// Runtime 74 ms Beats 56.14%
// Memory 45.4 MB Beats 73.68%
