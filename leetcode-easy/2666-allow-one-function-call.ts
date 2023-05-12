function once<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let isCalled = false
  return function(...args) {
    if (isCalled) return
    isCalled = true
    return fn(...args)
  }
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// 2023/05/12 done
// Runtime 68 ms Beats 25.13%
// Memory 42.7 MB Beats 83.96%
