/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const Robj = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
  }
  const Rarr = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  
  let num = 0
  let arr = s.split('')
  
  for (let i = 0; i < arr.length; i++) {
    if (Rarr.findIndex(e => e === arr[i]) < Rarr.findIndex(e => e === arr[i + 1])) {
      num -= Robj[arr[i]]
    } else {
      num += Robj[arr[i]]
    }
  }
  return num
};

// 2022.02.11 done
