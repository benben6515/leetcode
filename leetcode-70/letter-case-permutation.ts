function letterCasePermutation(s: string): string[] {
  const aToZ = 'abcdefghijklmnopqrstuvwxyz'
  s = s.toLowerCase()
  let result: string[] = []
  s.split('').forEach((c) => {
    if (result.length === 0) {
      if (aToZ.includes(c)) {
        result.push(c)
        result.push(c.toUpperCase())
      } else {
        result.push(c)
      }
    } else {
      const temp: string[] = []
      if (aToZ.includes(c)) {
        result.forEach((current) => {
          temp.push(`${current}${c}`)
          temp.push(`${current}${c.toUpperCase()}`)
        })
        result = temp
      } else {
        result = result.map((e) => `${e}${c}`)
      }
    }
  })
  return result
}
