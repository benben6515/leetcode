class BrowserHistory {
  private arr: string[]
  private index: number

  constructor(homepage: string) {
    this.arr = [homepage]
    this.index = 0
  }

  visit(url: string): void {
    this.index++
    this.arr = [...this.arr.slice(0, this.index), url]
  }

  back(steps: number): string {
    const newIndex = steps > this.index ? 0 : this.index - steps
    this.index = newIndex
    return this.arr[newIndex]
  }

  forward(steps: number): string {
    const newIndex = steps + this.index > this.arr.length - 1 ? this.arr.length - 1 : this.index + steps
    this.index = newIndex
    return this.arr[newIndex]
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// 2024/12/23 done.
// Runtime 24 ms Beats 87.12%
// Memory 60.60 MB Beats 70.45%
