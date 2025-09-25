class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  push(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current?.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  pop() {
    if (!this.head) {
      return null
    }
    let temp
    if (this.length === 1) {
      temp = this.head
      this.head = null
    } else {
      let current = this.head
      while (current?.next?.next) {
        current = current.next
      }
      temp = current.next
      current.next = null
    }
    this.length--
    return temp
  }

  shift() {
    if (!this.head) return null
    let temp
    if (this.length === 1) {
      temp = this.head
      this.head = null
    } else {
      temp = this.head
      this.head = this.head.next
    }
    this.length--
    return temp
  }

  unshift(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
    } else {
      const temp = this.head
      node.next = temp
      this.head = node
    }
    this.length++
    return node
  }

  insertAt(i, value) {
    if (i < 0 || i > this.length) return false
    if (i === 0) {
      this.unshift(value)
      return
    }
    let current = this.head
    let step = 0
    const node = new Node(value)
    while (current?.next && step < i - 1) {
      current = current.next
      step++
    }
    node.next = current.next
    current.next = node
    this.length++
    return true
  }

  removeAt(i) {
    if (i < 0 || i > this.length) return null
    if (this.length === 0) return null
    let result = null
    if (i === 0) {
      result = this.shift()
    } else if (i === this.length) {
      result = this.pop()
    } else {
      let current = this.head
      let step = 0
      while (current?.next && step < i - 1) {
        current = current.next
        step++
      }
      result = current.next
      current.next = current.next.next
      this.length--
    }
    return result
  }

  get(i) {
    if (i < 0 || i > this.length) return null
    let step = 0
    let current = this.head
    while (current?.next && step < i) {
      current = current.next
      step++
    }
    return current.value
  }

  print() {
    if (this.length === 0) {
      console.log('No node')
    } else {
      let current = this.head
      let str = ''
      while (current) {
        str = `${str} -> ${current.value}`
        current = current.next
      }
      console.log(`Linked List: ${str}`)
    }
  }
}

// test
const list = new LinkedList()
list.push('apple')
list.push('banana')
list.push(5)
list.print()
list.pop()
list.print()
list.shift()
list.print()
list.unshift(8)
list.unshift(2)
list.print()
list.insertAt(1, 3)
list.print()
list.insertAt(-1, 6)
list.insertAt(0, 'apple')
list.print()
list.removeAt(0)
list.print()
list.removeAt(1)
list.print()
console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(-1))
console.log(list.get(8))

// Note:
// 1. Stack -> have 'push' and 'pop'
// 2. Queue -> have 'push' and 'shift'
