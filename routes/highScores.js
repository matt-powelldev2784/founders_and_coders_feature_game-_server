const express = require('express')
const router = express.Router()
const HighScores = require('../models/highScores')

//postNewScore
router.post('/', async (req, res) => {
  try {
    const newScore = { name: 'matt', highScore: '200' }

    await HighScores.create(newScore)

    return res.status(200).json({
      success: true,
      status: 200,
      msg: 'New score added to database',
      newScore,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//getHighScores
router.get('/', async (req, res) => {
  try {
    const highScores = await HighScores.find()
    res.json(highScores)
    // const user = await User.findById(req.user.id).select('-password')
    // res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
