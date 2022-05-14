/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0 || s.length % 2) return false
  const stack = []

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (s[i] !== stack.pop()) return false
    }
  }
  return stack.length === 0 ? true : false
};

// 2022/05/14 done.
// Runtime: 56 ms, faster than 97.73% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 41.7 MB, less than 97.57% of JavaScript online submissions for Valid Parentheses.
