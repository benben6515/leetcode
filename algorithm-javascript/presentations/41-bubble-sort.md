# question

- methods: double for loop

> teacher's version

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }
  return arr
}
```

> my version

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}

const test = Array(10)
  .fill(null)
  .map((e) => Math.floor(Math.random() * 10))

console.log(bubbleSort(test))
```

Another though:

- I prefer start with left side, so that it like "bobble" floor up
- swap element by array destructuring
