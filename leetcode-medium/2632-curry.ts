function curry(fn: Function): Function {
  const curried = (...args: any[]) =>
    args.length < fn.length ? (...newArgs: any[]) => curried(...args, ...newArgs) : fn(...args)
  return curried
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

// 2023/05/15 done
// Runtime 80 ms Beats 34.54%
// Memory 48.8 MB Beats 68.36%
