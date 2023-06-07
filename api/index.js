const express = require('express');
const cors = require('cors')
// const propertyRoutes = require('./routes/propertyRoutes.js')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3003

//Middleware
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/dwellings', propertyRoutes)


app.get('/api/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

const { propertiesCtrls } = require('./controllers')

//ROUTES - METHODS //
app.get('api/dwellings', propertiesCtrls.getProperties)
app.get('api/dwellings/:id', propertiesCtrls.getPropertyById)
app.post('api/dwellings', propertiesCtrls.createProperty)
app.post('api/dwellings/seed', propertiesCtrls.seedProperty)
app.put('api/dwellings/:id', propertiesCtrls.updateProperty)
app.delete('api/:id', propertiesCtrls.deleteProperty)


app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})