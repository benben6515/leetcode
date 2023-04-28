const url = 'http://localhost:5432/node'

async function searchGraph(start: number) {
  const visited: Set<number> = new Set()
  visited.add(start)
  console.log(visited)
  await helper(start, visited)
}

async function helper(current: number, visited: Set<number>) {
  const response = await fetch(`${url}/${current}`)
  const data = await response.json()
  if (!data || !data.length) return

  data.forEach(async (e: number) => {
    if (!visited.has(e)) {
      visited.add(e)
      console.log(visited)
      console.log('api call =======')
      await helper(e, visited)
    }
  })
}

searchGraph(1)
