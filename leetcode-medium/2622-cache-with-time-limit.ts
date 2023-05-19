type Item = {
  value: number
  duration: number
  timeout: ReturnType<typeof setTimeout> | null
}
type Table = {
  [key: string]: Item
}

class TimeLimitedCache {
  private table: Table
  private currentCount: number

  constructor() {
    this.table = {}
    this.currentCount = 0
  }

  set(key: number, value: number, duration: number): boolean {
    clearTimeout(this.table[key]?.timeout)
    const timeout = setInterval(() => {
      clearTimeout(this.table[key].timeout)
      this.table[key] = null
      this.currentCount--
    }, duration)
    if (this.table[key]) {
      this.table[key] = { value, duration, timeout }
      return true
    }
    this.table[key] = { value, duration, timeout }
    this.currentCount++
    return false
  }

  get(key: number): number {
    if (this.table[key]) return this.table[key].value
    return -1
  }

  count(): number {
    return this.currentCount
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

// 2023/05/20 done
// Runtime 72 ms Beats 13.14%
// Memory 43 MB Beats 45.86%
