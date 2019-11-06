mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true )

//DB Schema
const pappSchema = mongoose.Schema({
  p: String,
  votes: Number
})

//parser to get rid of unnecessary mongodb fields
pappSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Papp = mongoose.model('Papp', pappSchema)

module.exports = Papp
