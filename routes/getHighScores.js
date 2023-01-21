const express = require('express')
const router = express.Router()
const HighScores = require('../models/highScores')

//get High Scores
router.get('/', async (req, res) => {
  try {
    const highScores = await HighScores.find().sort({ highScore: -1 }).limit(10)
    return res.json(highScores)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
