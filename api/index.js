const express = require('express');
const cors = require('cors')
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

const { propertiesCtrls } = require('./controllers')

//ROUTES - METHODS //
app.get('/dwellings', propertiesCtrls.getProperties)
app.get('/dwellings/:id', propertiesCtrls.getPropertyById)
app.post('/dwellings', propertiesCtrls.createProperty)
app.post('/dwellings/seed', propertiesCtrls.seedProperty)
app.put("/dwellings/:id", propertiesCtrls.updateProperty)
app.delete('/:id', propertiesCtrls.deleteProperty)



app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})