type F = () => Promise<any>

async function promisePool(functions: F[], n: number): Promise<any> {
  return new Promise((resovle) => {
    const result = Array<any>(functions.length)
    const now = new Date().valueOf()

    let currentIndex = 0
    let currentThread = 0

    function helper() {
      if (currentIndex >= functions.length) {
        if (currentThread === 0) return resovle(result)
      }
      while (currentThread < n && currentIndex < functions.length) {
        currentThread++
        const promise = functions[currentIndex]()
        currentIndex++
        promise.then(() => {
          result[currentIndex] = new Date().valueOf() - now
          currentThread--
          helper()
        })
      }
    }
    helper()
  })
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

// 2023/05/19 done
// Runtime 62 ms Beats 84.52%
// Memory 42.8 MB Beats 86.45%
