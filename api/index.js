const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt')
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

const { propertiesCtrls, bookingsCtrls } = require('./controllers')


//ROUTES - METHODS //
app.get('/dwellings', propertiesCtrls.getProperties)
app.get('/dwellings/:id', propertiesCtrls.getPropertyById)
app.post('/dwellings', propertiesCtrls.createProperty)
app.post('/dwellings/seed', propertiesCtrls.seedProperty)
app.put("/dwellings/:id", propertiesCtrls.updateProperty)
app.delete('/dwellings/:id', propertiesCtrls.deleteProperty)
app.get('/booking', bookingsCtrls.createBooking)
app.post('/booking', bookingsCtrls.createBooking)



app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})