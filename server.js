const express = require('express');
const methodOverride = require('method-override')
const cors = require('cors')
// const propertiesController = require('./controllers/oldCtrls.js')
// const properties = require('./models/properties.js')
const propertyRoutes = require('./routes/propertyRoutes.js')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3003

//Middleware
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/dwellings', propertyRoutes)



app.get('/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})