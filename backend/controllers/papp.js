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

pappRouter.put('/:id', async(req,res,next) => {
  try {
    const orig = await Papp.findById(req.params.id)
    const papp = {
      p: orig.p,
      votes: orig.votes + 1
    }
    const updatedPapp = await Papp.findByIdAndUpdate(
      req.params.id,
      papp,
      {new: true}
    )
    res.json(updatedPapp.toJSON())
  } catch (exception) {
    next(exception)
  }
})

module.exports = pappRouter
