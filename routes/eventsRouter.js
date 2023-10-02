const express = require('express')
const eventsRouter = express.Router()

const eventsController = require('../controllers/eventsController')

eventsRouter.get( '/events', eventsController.getEvents )

module.exports = eventsRouter
