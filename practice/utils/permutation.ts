export const permutation = (str: string) => {
  const result: string[] = []
  helper(str.split(''), '', result)
  return result
}

const helper = (arr: string[], prefix: string, result: string[]) => {
  if (arr.length === 0) return result.push(prefix)
  arr.forEach((e, i) => helper(arr.slice(0, i).concat(arr.slice(i + 1)), prefix + arr[i], result))
}

// test cases
console.log(permutation('abc'))
