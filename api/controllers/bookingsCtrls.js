const db = require('../models')

const getBookings = (req, res) => {
    db.Booking.find({})
        .then((foundBookings) => {
            console.log(foundBookings)
            if (!foundBookings) {
                res.status(404).json({ message: 'Bookings not found' })
            } else {
                res.status(200).json({ data: foundBookings })
            }
        })
}

const createBooking = async (req, res) => {
    const {
        property, checkIn, checkOut, numberOfGuests, price
    } = req.body
    try {
        const createdBooking = await db.Booking.create({ property, checkIn, checkOut, numberOfGuests, price });
        if (!createdBooking) {
            res.status(404).json({ message: 'Can\'t create booking' });
        } else {
            res.status(201).json({ data: createdBooking });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
}

module.exports = {
   createBooking,
    getBookings
}

