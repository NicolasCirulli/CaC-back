const events = [ 'batman', 'aladin', 'korean food' ]



const eventsController = {
    getEvents: ( req, res ) => {
        res.json( { mensaje: 'Eventos de amazing events', events: events } )
    }
}

module.exports = eventsController