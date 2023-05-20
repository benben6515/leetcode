type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), t)
  }
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Runtime 56 ms Beats 91.91%
// Memory 43.2 MB Beats 24.27%
