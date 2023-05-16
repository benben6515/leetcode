async function sleep(millis: number): Promise<void> {
  return new Promise((res, rej) => {
    setTimeout(() => res(), millis)
  })
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// 2023/05/16 done
// Runtime 65 ms Beats 47.21%
// Memory 43.1 MB Beats 32.22%
