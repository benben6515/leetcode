# Intersection problem

- methods: double loop

```javascript
const arr1 = [1, 2, 3, 5, 8]
const arr2 = [2, 3, 6, 9, 1]

function getIntersection(arr1, arr2) {
  const result = []
  arr1.forEach((e1) => {
    arr2.forEach((e2) => {
      if (e1 === e2) result.push(e2)
    })
  })
  return result
}

console.log(getIntersection(arr1, arr2))

// [-11, 14], [0, 3], [1, 2]
```

- one liner

```javascript
const arr1 = [1, 2, 3, 5, 8]
const arr2 = [2, 3, 6, 9, 1]

function getIntersection(arr1, arr2) {
  const result = []
  arr1.forEach((e1) => arr2.forEach((e2) => (e1 === e2 ? result.push(e2) : null)))
  return result
}

console.log(getIntersection(arr1, arr2))
```

Even though you only know very basic algorithm.
You can still try to solve problems like 9\*9 multiplication table
