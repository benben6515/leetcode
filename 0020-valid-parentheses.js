/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = s.split('')
  let idx = Math.floor(arr.length / 2)
  while (idx > 0) {
    let length = arr.length
    for (let i = 0; i < length; i++) {
      if (arr[i] === "(" && arr[i + 1] === ")") {
        arr.splice(i, 2)
      } else if (arr[i] === "[" && arr[i + 1] === "]") {
        arr.splice(i, 2)
      } else if (arr[i] === "{" && arr[i + 1] === "}") {
        arr.splice(i, 2)
      }
    }
    idx--
  }
  return !arr.length
};

// 2022.02.11 done
