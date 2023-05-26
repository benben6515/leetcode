type F = (...args: any[]) => void
type Timer = ReturnType<typeof setTimeout> | null

function throttle(fn: F, t: number): F {
  let timer: Timer | null = null
  let currentArgs: any = null

  function timeoutFunction(): void {
    if (currentArgs === null) {
      timer = null
    } else {
      fn(...currentArgs)
      currentArgs = null
      timer = setTimeout(timeoutFunction, t)
    }
  }

  return function throttled(...args: any) {
    if (timer) {
      currentArgs = args
    } else {
      fn(...args)
      timer = setTimeout(timeoutFunction, t)
    }
  }
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */

// 2023/05/26 done
// Runtime 53 ms Beats 98.17%
// Memory 43.1 MB Beats 62.20%
