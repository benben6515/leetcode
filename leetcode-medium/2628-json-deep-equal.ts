function areDeeplyEqual(o1: any, o2: any): boolean {
  if (typeof o1 !== typeof o2) return false
  if (typeof o1 === 'boolean') return o1 === o2
  if (typeof o1 === 'number') return o1 === o2
  if (typeof o1 === 'string') return o1 === o2
  if (isNaN(o1) !== isNaN(o2)) return false
  if (o1 === null && o2 === null) return true
  if (o1 === null || o2 === null) return false
  if (Array.isArray(o1) !== Array.isArray(o2)) return false

  if (Object.keys(o1).length !== Object.keys(o2).length) return false

  const object1 = sortObject(o1)
  const object2 = sortObject(o2)

  return JSON.stringify(object1) === JSON.stringify(object2)
}

function sortObject(obj: any) {
  if (typeof obj === null) return obj
  if (typeof obj === 'boolean') return obj
  if (!obj) return
  if (typeof obj !== 'object') return obj
  const array = Object.entries(obj)
  const sorted = array.sort()
  const newObj = {}
  sorted.forEach((e) => {
    newObj[e[0]] = sortObject(e[1])
  })
  return newObj
}

// 2023/05/27 done
// Runtime 146 ms Beats 8.19%
// Memory 61.2 MB Beats 5.42%
