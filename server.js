const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDb = require('./connectDb')
const highScoresRoute = require('./routes/highScores')

connectDb()
app.use(express.json({ extended: false }))

app.use('/high_scores', highScoresRoute)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`)
})
