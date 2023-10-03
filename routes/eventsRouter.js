const express = require('express')
const eventsRouter = express.Router()

const eventsController = require('../controllers/eventsController')

eventsRouter.get( '/events', eventsController.getEvents )
eventsRouter.post( '/events', eventsController.addEvent )
/* eventsRouter.put( '/events', eventsController.getEvents )
eventsRouter.delete( '/events', eventsController.getEvents ) */

module.exports = eventsRouter
