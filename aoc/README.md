# Advent of Code 2025

## Quick Start

### Using the REPL

Start the interactive REPL environment:

```bash
npm run repl
```

This gives you access to helpful utility functions:

```javascript
// Read input files
const input = readInput(1);  // reads day01/input.txt
const example = readInput(1, true);  // reads day01/example.txt

// Parse input
const lines = lines(input);  // split into lines
const nums = numbers(input);  // parse as numbers
const grid = grid(input);  // parse as 2D grid

// Quick calculations
sum([1, 2, 3]);  // 6
product([2, 3, 4]);  // 24
freq(['a', 'b', 'a']);  // { a: 2, b: 1 }
range(5);  // [0, 1, 2, 3, 4]
```

### Working on a Day

1. Create a folder for the day (e.g., `day02`)
2. Add `input.txt` with your puzzle input
3. Add `example.txt` with the example from the problem
4. Create `solution.js` using the template from `day01/solution.js`
5. Run your solution: `node day02/solution.js`

### Available Utilities in REPL

- `readInput(day, example=false)` - Read input file
- `lines(input)` - Split input into lines
- `numbers(input)` - Parse lines as numbers
- `grid(input)` - Parse input as 2D grid
- `csv(input)` - Parse comma-separated numbers
- `spaceNums(line)` - Parse space-separated numbers
- `sum(arr)`, `product(arr)` - Array operations
- `count(arr, val)`, `freq(arr)` - Counting utilities
- `range(start, end, step)` - Generate range
- `manhattan(x1, y1, x2, y2)` - Manhattan distance
- `printGrid(grid)` - Pretty print 2D grid

## Tips

- Use the REPL for quick experimentation
- Test with example input first
- Copy day01 folder structure for new days
- Keep solutions simple and readable

Happy coding!
