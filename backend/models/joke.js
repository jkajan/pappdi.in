mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true )
const uniqueValidator = require('mongoose-unique-validator')

//DB Schema
const jokeSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Sätt nu ens en bilaga!'],
    minlength: 10,
    maxlength: 255,
    unique: true
  },
  author: {type: String, required: [true, 'Säg nu vem du e!']}
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
