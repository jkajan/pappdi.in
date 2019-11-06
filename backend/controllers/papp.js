const pappRouter = require('express').Router()
const Papp = require('../models/papp')

pappRouter.get('/', async(req,res,next) => {
  try {
    const papps = await Papp.find({})
    res.json(papps.map(p => p.toJSON()))
  } catch (exception) {
    next(exception)
  }
})

module.exports = pappRouter
