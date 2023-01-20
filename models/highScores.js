const mongoose = require('mongoose')

const highScoresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  highScore: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('highScores', highScoresSchema)
