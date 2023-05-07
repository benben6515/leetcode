function createHelloWorld() {
  return function(...args): string {
    return 'Hello World'
  }
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 *
 */

// 2023/05/07 done
// Runtime 66 ms Beats 25%
// Memory 42.7 MB Beats 66.88%
