function jsonStringify(object: any): string {
  if (object === null) return `null`
  if (typeof object === 'boolean') return object ? `true` : `false`
  if (typeof object === 'number') return String(object)
  if (typeof object === 'string') return `"${object}"`
  const array = Object.entries(object)
  if (array.length === 0) {
    if (Array.isArray(object)) return '[]'
    else return '{}'
  }
  return helper(object)
}

function helper(object: any): string {
  if (object === null) return `null`
  if (typeof object === 'boolean') return object ? `true` : `false`
  if (typeof object === 'number') return String(object)
  if (typeof object === 'string') return `"${object}"`
  const array = Object.entries(object)
  let current = ''
  if (Array.isArray(object)) {
    for (let i = 0; i < array.length; i++) {
      current += `${helper(array[i][1])}`
      if (i !== array.length - 1) current += ','
    }
    return `[${current}]`
  } else {
    for (let i = 0; i < array.length; i++) {
      current += `"${array[i][0]}":${helper(array[i][1])}`
      if (i !== array.length - 1) current += ','
    }
    return `{${current}}`
  }
}

// 2023/05/27 done
// Runtime 80 ms Beats 81.37%
// Memory 48.2 MB Beats 87.47%
