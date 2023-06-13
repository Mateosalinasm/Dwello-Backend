const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    id: String,
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property"},
    checkIn: { type: Date},
    checkOut: { type: Date},
    numberOfGuests: { type: Number},
    price: Number
});

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking