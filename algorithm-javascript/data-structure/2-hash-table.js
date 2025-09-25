class HashTable {
  constructor(size) {
    this.size = size
    this.table = []
    for (let i = 0; i < this.size; i++) {
      this.table.push([])
    }
  }

  // parse string to integer
  parse(str = '') {
    let result = 0
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i)
    }
    return result
  }

  hash1(key) {
    return key % this.size
  }

  hash2(key) {
    let A = (Math.sqrt(5) - 1) / 2
    return Math.floor(((key * A) % 1) * this.size)
  }

  hash(key) {
    if (typeof key === 'string') {
      key = this.parse(key)
    }
    return this.hash2(key)
    // return this.hash1(key)
  }

  set(key, value) {
    let index = this.hash(key)
    this.table[index].push({ key, value })
  }

  get(key) {
    let index = this.hash(key)
    const arr = this.table[index]
    return arr.find((e) => e.key === key) || null
  }

  printAll() {
    console.log(this.table)
  }
}

// test
const myHashTable = new HashTable(6)
myHashTable.set(11424, 'Mike')
myHashTable.set(6254, 'James')
myHashTable.set(4171, 'Drake')
myHashTable.set(554, 'Kevin')
myHashTable.printAll()
console.log(myHashTable.get(11424))

// test 2
const myHashTable2 = new HashTable(6)
myHashTable2.set('white', '#FFFFFF')
myHashTable2.set('red', '#FF0000')
myHashTable2.set('magenta', '#FF00FF')
myHashTable2.printAll()
console.log(myHashTable2.get('red'))
