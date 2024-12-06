class DoubleListNode {
  constructor(val) {
    this.value = val
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new DoubleListNode(-1)
    this.tail = new DoubleListNode(-1)
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  insertFront(val) {
    const node = new DoubleListNode(val)
    node.prev = this.head
    ndoe.next = this.head.next

    this.head.next.prev = node
    this.head.next = node
  }

  insertEnd(val) {
    const node = new DoubleListNode(val)
    node.next = this.tail
    node.prev = this.tail.prev

    this.tail.prev.next = node
    this.tail.prev = node
  }

  removeFront() {
    this.head.next.next.prev = this.head
    this.head.next = this.head.next.next

    // remove first
    // const first = this.head.next
    // first.next.prev = this.head
    // this.head.next = first.next
  }

  removeEnd() {
    this.tail.prev.prev.next = this.tail
    this.tail.prev = this.tail.prev.prev

    // remove last
    // const last = this.tail.prev
    // last.prev.prev.next = this.tail
    // this.tail.prev = last.prev
  }

  print() {
    let curr = this.head.next
    let str = ''
    while (curr) {
      str = `${str}${curr.value} ->`
      curr = curr.next
    }
    console.log(str)
  }
}
