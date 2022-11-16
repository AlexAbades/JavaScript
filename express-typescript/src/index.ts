import express from 'express'
// const express = require('express') => common js. // Masscript modules, luego al compilarse uilizamos commonjs

import diaryRouter from './routes/routeDiaries'

const app = express()
app.use(express.json()) // middleware que transforma la req.body en un objeto json

const PORT = 3000

// Creamos un end point
app.get('/ping', (_req, res) => {
  console.log('someonepinged here ' + new Date().toLocaleString)
  res.send('pong')
})

app.use('/api/diaries', diaryRouter) // En la ruta /api/diaries utiliza diaryRouter

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
