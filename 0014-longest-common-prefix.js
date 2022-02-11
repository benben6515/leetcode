/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let strsArr = []
  strs.map(e => strsArr.push(e.split('')))
  
  if (strs.every(e => e === "")) return ""
  
  let LCP = ''
  
  for (let i = 0; i < strs[0].length; i++) {
    let s = strsArr[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (strsArr[j][i] !== s) {
        return LCP
      }
    }
    LCP += s
  }
  return LCP
};

// 2022.02.11 done
