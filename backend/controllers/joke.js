const jokeRouter = require('express').Router()
const Joke = require('../models/joke')

jokeRouter.get('/', async(req,res,next) => {
  try {
    const jokes = await Joke.find({})
    res.json(jokes.map(j => j.toJSON()))
  } catch (exception) {
    next(exception)
  }
})

jokeRouter.post('/', async(req,res,next) => {
  try {
    const joke = new Joke(req.body)
    const savedJoke = await joke.save()
    res.status(201).json(savedJoke)
  } catch (exception) {
    next(exception)
  }
})

module.exports = jokeRouter
