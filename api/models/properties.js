const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    description: String,
    options: String,
    imageSrc: String,
    features: { type: Array, "default": [] },
    propertyImages: { type: Array, "default": [] },
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property