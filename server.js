require('dotenv').config()
const express = require('express')
const app = express()
require('./config/db')

const eventsRouter = require('./routes/eventsRouter')

app.get( '/', (req, res) => res.send('Api amazing events') )
app.use( '/api', eventsRouter )

app.listen( process.env.PORT, () => console.log('Servidor corriendo en el puerto '+process.env.PORT) )