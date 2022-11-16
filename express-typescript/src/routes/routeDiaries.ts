import express from 'express' // ESModules
import * as diaryServices from '../services/diary'

const router = express.Router() // QUESTION: Para que crea un router?

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id) // Unary operator: + It's the same as Number(), convert string to number

  return (diary != null) // Check that's not null (we've defined that if it doesn't find anything returns an undefined)
    ? res.send(diary) // ? operator: returns undefined if an object it's undefined or null (intead of an error)
    : res.sendStatus(404) // QUESTION: para que sirve el colon operator
})

router.post('/', (req, res) => {
  const { date, weather, visibiity, comment } = req.body

  const newDiaryEntry = diaryServices.addEntry(
    date,
    weather,
    visibiity,
    comment
  )

  res.json(newDiaryEntry)
})

export default router
