const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    id: String,
    name: String,
    href: String,
    price: String,
    description: String,
    options: String,
    imageSrc: String,
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property