require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let NODE_ENV = process.env.NODE_ENV
if (NODE_ENV === 'development') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}
module.exports = {
  MONGODB_URI,
  PORT,
  NODE_ENV
}
