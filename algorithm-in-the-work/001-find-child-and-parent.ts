// spec: find specific ids and parentId in the tree structure

interface DataType {
  id: string
  child: DataType[]
}

// example
const ids = ["3", "4", "5"]
const data: DataType[] = [
  {
    id: "1",
    child: [
      {
        id: "2",
        child: [
          {
            id: "3",
            child: [],
          },
          {
            id: "4",
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    child: [],
  },
]

const result = {
  "3": {
    id: "3",
    parent: { id: "2" },
  },
  "4": {
    id: "4",
    parent: { id: "2" },
  },
  "5": {
    id: "5",
    parent: null,
  },
}

// implement
export function findChildAndParent(ids: string[], data: DataType[]) {
  // implement your function here
  const dto: any = {}
  ids.forEach((e) => (dto[e] = data))
  console.log(dto)

  // TODO
  function childToList(dto: any) {
    const map = {}
    for (const key in dto) {
      Object.assign(map, loopChild(dto[key].child, null))
    }
    return map
  }

  function loopChild(array: DataType[], parent: { id: string } | null) {
    if (!array || !array.length) return {}
    const map: any = {}
    for (const item of array) {
      if (item.child && item.child.length) {
        Object.assign(map, loopChild(item.child, { id: item.id }))
      } else {
        map[item.id] = { ...item, parent }
      }
    }
    return map
  }

  return childToList(dto)
}

console.log(JSON.stringify(findChildAndParent(ids, data), null, 2))
