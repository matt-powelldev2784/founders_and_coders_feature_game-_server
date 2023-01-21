const mongoose = require('mongoose')

const highScoresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  highScore: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('highScores', highScoresSchema)
