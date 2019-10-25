mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true )

//DB Schema
const jokeSchema = mongoose.Schema({
  content: String,
  author: String
})

//parser to get rid of unnecessary mongodb fields
jokeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Joke = mongoose.model('Joke', jokeSchema)

module.exports = Joke
