const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Joke = require('./models/joke')
const config = require('./utils/config')
const logger = require('./utils/logger')
const jokeRouter = require('./controllers/joke')
const middleware = require('./utils/middleware')

const mongoUrl = config.MONGODB_URI
console.log('connecting to', mongoUrl)
mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(() => {
  logger.info('Connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)


app.use('/api/jokes', jokeRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app
