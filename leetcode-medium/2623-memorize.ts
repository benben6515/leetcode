type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  const object = {}
  return (...args) => (object[args.join(',')] ??= fn(...args))
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// 2023/05/14 done
// Runtime 352 ms Beats 78.37%
// Memory 108.4 MB Beats 18.52%
