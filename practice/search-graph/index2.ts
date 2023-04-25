const url2 = 'http://localhost:5432/node'

async function searchGraph2(start: number) {
  const visited: Set<number> = new Set()
  visited.add(start)
  console.log(visited)
  await helper2([start], visited)
}

async function helper2(currentArray: number[], visited: Set<number>) {
  const resArray = await Promise.all(currentArray.map(async (e: number) => await fetch(`${url2}/${e}`)))
  const dataArray = await Promise.all(resArray.map(async (e) => await e.json()))

  const list = dataArray.reduce((acc, cur) => {
    return [...acc, ...cur]
  }, [])
  const uniqList: Set<number> = new Set(list)

  const filteredList = Array.from(uniqList).filter((e: number) => !visited.has(e))
  if (!filteredList || !filteredList.length) return
  filteredList.forEach((e) => visited.add(e))
  console.log(visited)
  console.log('=======')
  helper2(filteredList, visited)
}

searchGraph2(1)
