const express = require('express');
const cors = require('cors')
// const bcrypt = require('bcrypt')
// const propertyRoutes = require('./routes/propertyRoutes.js')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3003

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/dwellings', propertyRoutes)


app.get('/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

const { propertiesCtrls, bookingsCtrls, luxeCtrls } = require('./controllers')


//ROUTES - METHODS //
app.get('/dwellings', propertiesCtrls.getProperties)
app.get('/dwellings/luxe', luxeCtrls.getLuxeProperties)
app.get('/dwellings/luxe/:id', luxeCtrls.getLuxePropertyById)
app.get('/dwellings/:id', propertiesCtrls.getPropertyById)
app.get('/booking', bookingsCtrls.getBookings)
app.post('/dwellings', propertiesCtrls.createProperty)
app.post('/dwellings/luxe', luxeCtrls.createLuxeProperty)
app.post('/dwellings/seed', propertiesCtrls.seedProperty)
app.post('/dwellings/luxe/seed', luxeCtrls.seedLuxeProperty)
app.post('/booking', bookingsCtrls.createBooking)
app.put("/dwellings/:id", propertiesCtrls.updateProperty)
app.put("/dwellings/luxe/:id", luxeCtrls.updateLuxeProperty)
app.delete('/dwellings/:id', propertiesCtrls.deleteProperty)
app.delete('/dwellings/luxe/:id', luxeCtrls.deleteLuxeProperty)



app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})