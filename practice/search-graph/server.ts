import express from 'express'
import { Request, Response, NextFunction } from 'express'

const app = express()

type NodMap = { [key: string]: number[] }

const nodeMap: NodMap = {
  '1': [2, 3, 4],
  '2': [1, 5],
  '3': [1, 5],
  '4': [1, 6],
  '5': [2, 3, 7],
  '6': [4, 7],
  '7': [5, 6],
}

app.use('/node/:id', (req: Request, res: Response, next: NextFunction) => {
  const list = Object.keys(nodeMap)
  setTimeout(() => {
    if (list.includes(req.params.id)) {
      return res.status(200).json(nodeMap[req.params.id])
    }
    return res.status(404).send('node not found')
  }, 500)
})

app.listen(5432, () => {
  console.log('server listen at 5432')
})
