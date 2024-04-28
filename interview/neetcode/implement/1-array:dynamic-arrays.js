class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity
    this.length = 0
    this.array = []
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.array[i]
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.array[i] = n
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.length === this.capacity) {
      this.resize()
    }
    this.array[this.length] = n
    this.length++
  }

  /**
   * @returns {number}
   */
  popback() {
    const target = this.array[this.length - 1]
    if (this.length > 0) this.length--
    return target
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity = this.capacity * 2
    const newArray = new Array(this.capacity)
    this.array.forEach((e, i) => {
      newArray[i] = e
    })
    this.array = newArray
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.length
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity
  }
}
