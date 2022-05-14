/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const map1 = new Map
  const map2 = new Map

  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i])) {
      map1.set(s[i], 1)
    } else {
      map1.set(s[i], map1.get(s[i]) + 1)
    }
    if (!map2.has(t[i])) {
      map2.set(t[i], 1)
    } else {
      map2.set(t[i], map2.get(t[i]) + 1)
    }
  }
  for (let [key, value] of map1) {
    if (value !== map2.get(key)) return false
  }
  return true
};

// 2022/05/14 done.
// Runtime: 88 ms, faster than 79.91% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 43.9 MB, less than 59.67% of JavaScript online submissions for Valid Anagram.
