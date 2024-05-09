class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null)
    this.tail = this.head
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let i = 0
    let current = this.head.next
    while (current) {
      if (i === index) return current.value
      current = current.next
      i++
    }
    return -1
  }

  /**
   * @param {number} value
   * @return {void}
   */
  insertHead(value) {
    const node = new Node(value)
    node.next = this.head.next
    this.head.next = node
    if (!node.next) {
      this.tail = node
    }
  }

  /**
   * @param {number} value
   * @return {void}
   */
  insertTail(value) {
    const node = new Node(value)
    this.tail.next = node
    this.tail = this.tail.next
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let i = 0
    let current = this.head
    while (current && i < index) {
      current = current.next
      i++
    }

    if (current && current?.next) {
      if (current.next === this.tail) {
        this.tail = current
      }
      current.next = current.next.next
      return true
    }
    return false
  }

  /**
   * @return {number[]}
   */
  getValues() {
    const arr = []
    let current = this.head.next
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
}
