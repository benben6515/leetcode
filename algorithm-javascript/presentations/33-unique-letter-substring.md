# Unique Letter Substring

- methods: counter, two pointer

```javascript
function uniqueLetterString(str) {
  let start = 0
  let end = 0
  const counter = {}
  let maxLength = 0

  while (end < str.length) {
    const startChar = str[start]
    const endChar = str[end]
    if (!counter?.[endChar]) {
      counter[endChar] = 1
      end++
      maxLength = Math.max(maxLength, end - start)
    } else {
      counter[startChar]--
      start++
    }
  }

  console.log(maxLength)
  return maxLength
}

uniqueLetterString('thisishowwedoit')
// 6, wedoit

uniqueLetterString('aabbabcaccabbb')
// 3, abc
```

Another though:

- You can use `Math.max()` or `Math.min()` to update value with a more elegant way
- You can reorder base case first
