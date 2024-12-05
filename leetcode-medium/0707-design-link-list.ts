class ListedNode {
  value: number
  prev: null | ListedNode
  next: null | ListedNode

  constructor(val: number) {
    this.value = val
    this.prev = null
    this.next = null
  }
}

class MyLinkedList {
  head: ListedNode
  tail: ListedNode

  constructor() {
    const head = new ListedNode(-1)
    const tail = new ListedNode(-1)
    this.head = head
    this.tail = tail
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(index: number): number {
    let curr = this.head.next
    let i = 0
    while (curr && i < index) {
      curr = curr.next
      i++
    }
    if (curr) {
      return curr.value
    }
    return -1
  }

  addAtHead(val: number): void {
    const node = new ListedNode(val)
    const next = this.head.next as ListedNode
    const prev = this.head
    node.next = next
    node.prev = prev
    prev.next = node
    next.prev = node
  }

  addAtTail(val: number): void {
    const node = new ListedNode(val)
    const next = this.tail
    const prev = this.tail.prev as ListedNode
    node.next = next
    node.prev = prev
    prev.next = node
    next.prev = node
  }

  addAtIndex(index: number, val: number): void {
    const node = new ListedNode(val)
    let curr = this.head.next
    let i = 0
    while (curr && i < index) {
      curr = curr.next
      i++
    }
    if (curr && i === index) {
      const next = curr
      const prev = curr.prev as ListedNode
      node.next = next
      node.prev = prev
      prev.next = node
      next.prev = node
    }
  }

  deleteAtIndex(index: number): void {
    let curr = this.head.next
    let i = 0
    while (curr && i < index) {
      curr = curr.next
      i++
    }
    if (curr && curr !== this.tail && index === i) {
      const next = curr.next as ListedNode
      const prev = curr.prev as ListedNode
      prev.next = next
      next.prev = prev
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// 2024/12/05 done.
// Runtime 19 ms Beats 81.76%
// Memory 60.02 MB Beats 44.63%
