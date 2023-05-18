type Fn = (...params: any[]) => Promise<any>

function timeLimit(fn: Fn, t: number): Fn {
  const limiter: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => rej('Time Limit Exceeded'), t)
  })
  return async function(...args) {
    return Promise.race([fn(...args), limiter])
  }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// 2023/05/18 done
// Runtime 69 ms Beats 32.77%
// Memory 42.9 MB Beats 64.36%
