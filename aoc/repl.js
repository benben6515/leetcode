import repl from 'repl';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility functions for AOC
const utils = {
  // Read input file
  readInput(day, example = false) {
    const filename = example ? 'example.txt' : 'input.txt';
    const filepath = path.join(__dirname, `day${String(day).padStart(2, '0')}`, filename);
    try {
      return fs.readFileSync(filepath, 'utf-8');
    } catch (err) {
      console.error(`Could not read ${filepath}`);
      return null;
    }
  },

  // Parse input into lines
  lines(input) {
    return input.trim().split('\n');
  },

  // Parse input into numbers
  numbers(input) {
    return input.trim().split('\n').map(Number);
  },

  // Parse input into grid
  grid(input) {
    return input.trim().split('\n').map(line => line.split(''));
  },

  // Parse comma-separated numbers
  csv(input) {
    return input.trim().split(',').map(Number);
  },

  // Parse space-separated numbers
  spaceNums(line) {
    return line.trim().split(/\s+/).map(Number);
  },

  // Sum array
  sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  },

  // Product array
  product(arr) {
    return arr.reduce((a, b) => a * b, 1);
  },

  // Count occurrences
  count(arr, val) {
    return arr.filter(x => x === val).length;
  },

  // Frequency map
  freq(arr) {
    const map = {};
    for (const item of arr) {
      map[item] = (map[item] || 0) + 1;
    }
    return map;
  },

  // Range helper
  range(start, end, step = 1) {
    const result = [];
    if (end === undefined) {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  },

  // Manhattan distance
  manhattan(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  },

  // Print grid
  printGrid(grid) {
    console.log(grid.map(row => row.join('')).join('\n'));
  }
};

// Start REPL
const replServer = repl.start({
  prompt: 'aoc> ',
  useColors: true,
});

// Add utilities to REPL context
Object.assign(replServer.context, utils);
replServer.context.fs = fs;
replServer.context.path = path;

console.log('Welcome to AOC REPL!');
console.log('Available utilities:');
console.log('  readInput(day, example=false) - Read input file');
console.log('  lines(input) - Split input into lines');
console.log('  numbers(input) - Parse lines as numbers');
console.log('  grid(input) - Parse input as 2D grid');
console.log('  csv(input) - Parse comma-separated numbers');
console.log('  spaceNums(line) - Parse space-separated numbers');
console.log('  sum(arr), product(arr) - Array operations');
console.log('  count(arr, val), freq(arr) - Counting utilities');
console.log('  range(start, end, step) - Generate range');
console.log('  manhattan(x1, y1, x2, y2) - Manhattan distance');
console.log('  printGrid(grid) - Pretty print 2D grid');
console.log('');
