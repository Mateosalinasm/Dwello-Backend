const mongoose = require('mongoose')

const luxePropertySchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    description: String,
    options: String,
    imageSrc: String,
    features: { type: Array, "default": [] },
    propertyImages: { type: Array, "default": [] },
})

const Luxe = mongoose.model('Luxe', luxePropertySchema)

module.exports = Luxe