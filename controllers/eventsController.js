const events = [ 'batman', 'aladin', 'korean food' ]

const Events = require('../models/eventModel')

const eventsController = {
    getEvents: async( req, res ) => {
        try {
            const events = await Events.find()
            res.json( { mensaje: 'Eventos de amazing events', events: events } )
        } catch (error) {
            return res.status( 500 ).json({success:false})
        }
    },
    addEvent: async(req, res) => { 
        try {
            const newEvent = await Events.create(req.body)
            return res.status(201).json( { success:true, event: newEvent } )
        } catch (error) {
            return res.status( 500 ).json({success:false})
        }
    }
}

module.exports = eventsController


