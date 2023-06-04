const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    description: String,
    options: String,
    imageSrc: String,
    propertyImages: { type: Array, "default": [] }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property