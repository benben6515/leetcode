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
