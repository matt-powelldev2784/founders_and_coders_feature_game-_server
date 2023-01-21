const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
  windowMs: 3600000, //1 hour
  max: 50,
  message: 'You have exceeded the maximum query limit for the high scores public api',
  headers: true,
})

module.exports = apiLimiter
