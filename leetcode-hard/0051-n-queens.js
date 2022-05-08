/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = []
  const board = Array(n).fill(null).map( (e) => Array(n).fill('.') )

  const backtrack = (board, row) => {
    if (row === board.length) (
      res.push(JSON.parse(JSON.stringify(board)))
    )
    for (let col = 0; col < board.length; col++) {
      if (!isValid(board, row, col)) continue

      board[row][col] = 'Q'
      backtrack(board, row + 1)
      board[row][col] = '.'
    }
  }
  backtrack(board, 0)

  return res.map(n => n.map(m => m.join('')))
};

function isValid(board, row, col) {
  const n = board.length

  for (let i = 0; i < n; i++) {
    if (board[i][col] === 'Q') return false
  }

  let i = row - 1
  let j = col - 1
  while (i >= 0 && j >= 0) {
    if (board[i][j] === 'Q') return false
    i--
    j--
  }

  i = row - 1
  j = col + 1
  while (i >= 0 && j <= n) {
    if (board[i][j] === 'Q') return false
    i--
    j++
  }

  return true
}

// 2022/04/21 done.
// Runtime: 111 ms, faster than 49.31% of JavaScript online submissions for N-Queens.
// Memory Usage: 44.7 MB, less than 87.85% of JavaScript online submissions for N-Queens.
