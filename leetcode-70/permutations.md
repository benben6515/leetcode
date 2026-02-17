# Permutations Algorithm - Deep Dive

## Overview

This function generates all permutations of an input array using backtracking with in-place swapping. It explores every possible arrangement of elements without creating intermediate arrays, making it space-efficient during computation.

## Recursive Call Tree Visualization

For `nums = [1, 2, 3]`, here's the recursion tree:

```
                    backtrack(0, 3)
                          │
              ┌───────────┼───────────┐
         swap(0,0)    swap(0,1)    swap(0,2)
         [1,2,3]      [2,1,3]      [3,2,1]
              │           │           │
         backtrack(1,3)  ...         ...
              │
      ┌───────┼───────┐
 swap(1,1) swap(1,2)
 [1,2,3]   [1,3,2]
     │         │
backtrack(2,3) ...
     │
  start===end
  → push [1,2,3]
```

## Key Details Explained

### 1. The `start` Parameter

- Represents the "current position" we're deciding
- When `start === end`, we've made decisions for all positions
- `start` increases by 1 each recursive call (`backtrack(start + 1, end)`)
- Acts as a boundary: everything before `start` is fixed, everything from `start` onward is still being decided

### 2. The Swap-Swap Pattern (Lines 10-12)

```typescript
swap(i, start, nums)        // Put element i at position start
backtrack(start + 1, end)   // Explore with this arrangement
swap(i, start, nums)        // Put it back (undo)
```

This is the **essence of backtracking**: try something, explore, then undo so you can try the next option.

- **First swap**: Tries putting element `i` at position `start`
- **Recursive call**: Explores all arrangements with that choice
- **Second swap**: Undoes the change to restore state for the next iteration

Without the second swap, the array would remain changed and later iterations would operate on incorrect data.

### 3. Why `nums.slice()` (Line 6)

```typescript
result.push(nums.slice())
```

- Creates a shallow copy of the array
- **Critical**: If we pushed `nums` directly, all entries in `result` would point to the SAME array reference
- As swaps happen in subsequent iterations, all "permutations" in `result` would change together
- `slice()` gives each permutation its own independent copy, preserving the exact state when it was saved

### 4. The Loop Logic (Line 9)

```typescript
for (let i = start; i < end; i++)
```

- `i = start`: Keep the current element where it is (no change needed, but still goes through swap)
- `i > start`: Swap element at `i` with element at `start`
- This ensures each element gets a chance to be at the `start` position
- The loop systematically tries every possible element at each position

## State Evolution Example

Track `nums` through the first branch of the recursion:

```
Initial:  [1, 2, 3]

backtrack(0, 3), i=0:
  swap(0,0) → [1, 2, 3]
  
  backtrack(1, 3), i=1:
    swap(1,1) → [1, 2, 3]
    
    backtrack(2, 3):
      start===end → push [1,2,3] to result ✓
      
    swap(1,1) → [1, 2, 3] (undo - back to previous state)
    
  i=2:
    swap(1,2) → [1, 3, 2]
    
    backtrack(2, 3):
      start===end → push [1,3,2] to result ✓
      
    swap(1,2) → [1, 2, 3] (undo - back to [1,2,3])
    
  swap(0,0) → [1, 2, 3] (undo - back to original)

i=1: swap(0,1) → [2, 1, 3] (start next branch)
```

Notice how every swap is undone after exploring, ensuring we return to a clean state before trying the next option.

## Why This Works

The algorithm systematically explores **all** possibilities because:

1. **Completeness**: Each loop iteration tries a unique element at position `start`, ensuring no arrangement is missed
2. **Recursion**: Handles all remaining positions after fixing the current position
3. **State restoration**: The swap-undo pattern ensures the state is always correct before trying the next option
4. **Exhaustive search**: The loop exhausts all possibilities before returning, guaranteeing we find every permutation

This is a **classical backtracking pattern**:
```
State   →   Explore   →   Unstate   →   Next Option
```

## Complexity Analysis

- **Time Complexity**: O(n × n!)
  - There are n! permutations
  - Each permutation takes O(n) time to copy (`nums.slice()`)
  - The recursive tree has n! leaves, each representing one complete permutation

- **Space Complexity**: 
  - O(n!) for storing the result (if we count output)
  - O(n) for the recursion stack depth and the input array (if we don't count output)

## Key Insight

By swapping elements in place and undoing swaps after recursion, the algorithm explores all n! permutations without needing extra space for intermediate arrays. The only additional memory needed is for storing the final results and the recursion stack.
