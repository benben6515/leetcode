/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const str = `${number}`.replace(/-/g, '').replace(/\s/g, '')
  const arr = str.split('')
  let result = ''

  if (arr.length < 3) return arr.join('')

  switch (arr.length % 3) {
    case 0:
      for (let i = 0; i < arr.length; i++) {
        if (i !==0 && i % 3 === 0) {
          result += '-'
        }
        result += arr[i]
      }
      break
    case 1:
      for (let i = 0; i < arr.length; i++) {
        if (arr.length - i === 4) break
        if (i !==0 && i % 3 === 0) {
          result += '-'
        }
        result += arr[i]
      }
      result += `${arr.length === 4 ? '' : '-'}${arr.slice(arr.length - 4, arr.length - 2).join('')}-${arr.slice(arr.length - 2, arr.length).join('')}`
      break
    case 2:
      for (let i = 0; i < arr.length; i++) {
        if (arr.length - i === 2) break
        if (i !==0 && i % 3 === 0) {
          result += '-'
        }
        result += arr[i]
      }
      result += `-${arr.slice(-2).join('')}`
      break
  }

  return result
};

// 2022/03/31 done
// Runtime: 77 ms, faster than 55.21% of JavaScript online submissions for Reformat Phone Number.
// Memory Usage: 42.4 MB, less than 57.29% of JavaScript online submissions for Reformat Phone Number.
