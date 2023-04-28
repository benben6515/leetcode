# search graph

ref: <https://www.youtube.com/watch?v=BkszA-MvjXA>

desc: travase all node by the nearest side

```typescript
// input
const graph = {
  '1': [2, 3, 4],
  '2': [1, 5],
  '3': [1, 5],
  '4': [1, 6],
  '5': [2, 3, 7],
  '6': [4, 7],
  '7': [5, 6],
}
```

```typescript
// output
// 1 => 2, 3, 4 => 5, 6 => 7
```
