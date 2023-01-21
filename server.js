const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./connectDb')
const apiLimiter = require('./apiLimiter')
const getHighScoresRoute = require('./routes/getHighScores')
const postHighScoresRoute = require('./routes/postHighScores')

connectDb()
app.use(express.json({ extended: false }))
app.use(cors())
app.options('*', cors())

app.use('/high_scores', getHighScoresRoute)

//limit post requests due to public api
app.use(apiLimiter)
app.use('/high_scores', postHighScoresRoute)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`)
})
