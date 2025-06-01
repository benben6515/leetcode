# question

- methods: recursion

```javascript
function arrayOfArrays(arr = []) {
  let result = []

  arr.forEach((e) => {
    if (!Array.isArray(e)) {
      result.push(e)
    } else {
      const subArr = arrayOfArrays(e)
      subArr.forEach((e) => result.push(e))
    }
  })

  return result
}

console.log(arrayOfArrays([1, 2, 3, 4, 5, 6]))
// [1, 2, 3, 4, 5, 6]

console.log(arrayOfArrays([1, 2, [3, 4], 5, 6]))
// [1, 2, 3, 4, 5, 6]

console.log(arrayOfArrays([1, [2, [[3], 4], 5], 6]))
// [1, 2, 3, 4, 5, 6]
```

Another though:

- I have no idea
  1. me too!
  2. you too?
