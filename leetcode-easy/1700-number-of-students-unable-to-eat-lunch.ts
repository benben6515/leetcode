function countStudents(students: number[], sandwiches: number[]): number {
  let res = students.length
  const counter = {}
  students.forEach((e) => {
    if (!counter[e]) counter[e] = 0
    counter[e]++
  })

  for (let s of sandwiches) {
    if (counter[s] > 0) {
      counter[s]--
      res--
    } else {
      break
    }
  }
  return res
}

// 2024.12.30 done.
// Runtime 1 ms Beats 38.76%
// Memory 51.46 MB Beats 76.74%
