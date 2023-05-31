const express = require('express')
const router = express.Router()
const Property = require('../models/properties.js')
const mongoose = require('mongoose')

const getProperties = async(req, res) => {
    try {
        const properties = await Property.find({})
        console.log('Get Properties: ', properties)
        res.json(properties)
    } catch (err) {
        console.log('Can\'t find Properties', err.message)
    }
}

const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        console.log(property)
        res.json(property)
    } catch (err) {
        console.log('Can\'t find Property', err.message)
        res.status(400);
    }
}

const createProperty = async(req, res) => {
    try {
        const {
            id,
            name,
            href,
            price,
            description,
            options,
            imageSrc, } = req.body

        const createdProperty = await Property.create({
            id,
            name,
            href,
            price,
            description,
            options,
            imageSrc,
        })
        res.json(createdProperty)
    } catch (err) {
        console.log('Couldn\'t create Property', err.message)
        res.status(500).json({ error: 'Server error' });
    }
}

const deleteProperty = async(req,res) => {
    try {
        const { propertyId } = req.params
        const deleteProperty = await Property.findByIdAndDelete(propertyId)
        res.json(deleteProperty)
    } catch (err) {
        console.log(err.message)
    }
}

const updateProperty = async(req, res) => {
    try {
        const { propertyId } = req.body

        const {
            id,
            name,
            href,
            price,
            description,
            options,
            imageSrc, } = req.body

        const updatedProperty = await Property.findByIdAndUpdate(propertyId, {
            id,
            name,
            href,
            price,
            description,
            options,
            imageSrc,
        })

        res.json(updatedProperty)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = { getProperties, getPropertyById, createProperty, deleteProperty, updateProperty }


// //Create Route
// router.post('/', (req, res) => {
//     Property.create(req.body, (err, createdProperty) => {
//         console.log(createdProperty)
//         res.redirect('dwellings')
//     })
// })

// //New Form Route
// router.get('/new', (req, res) => {
//     res.render('#')
// })

// //Show Route
// router.get('/:id', (req, res) => {
//     Property.findById(req.params.id, (err, foundProperty) => {
//         if (err) {
//             console.log(err.message)
//         } else {
//             res.render('#', {
//                 property: foundProperty
//             })
//         }
//     })
// })

// router.put('/:id', (req, res) => {
//     const updatedFields = {};
//     if (req.body.id != '') {
//         updatedFields.id = req.body.id
//     }
//     if (req.body.name != '') {
//         updatedFields.name = req.body.name
//     }
//     if (req.body.href !== '') {
//         updatedFields.href = req.body.href;
//     }
//     if (req.body.price !== '') {
//         updatedFields.price = req.body.price;
//     }
//     if (req.body.description !== '') {
//         updatedFields.description = req.body.description;
//     }
//     if (req.body.options !== '') {
//         updatedFields.options = req.body.options;
//     }
//     if (req.body.imageSrc !== '') {
//         updatedFields.imageSrc = req.body.imageSrc;
//     }

//     Property.findByIdAndUpdate (
//         req.params.id,
//         {...updatedFields},
//         {new: true},
//         (err, updatedProperty) => {
//             if(err) {
//                 console.log(err.message)
//             } else {
//                 console.log(updatedProperty)
//                 res.redirect(`/dwellings/${req.params.id}`)
//             }
//         }
//     )
// })

// //Delete Route
// router.delete('/:id', (req, res) => {
//     Property.findByIdAndDelete(req.params.id, (err, deletedProperty) => {
//         if(err) {
//             console.log(err.message)
//         } else {
//             res.redirect('/dwellings')
//         }
//     })
// })

// //Edit Form
// router.get('/:id/edit', (req, res) => {
//     Property.findById(req.params.id, (err, foundProperty) => {
//         if(err) { console.log(err.message) }
//         else {
//             res.render('#', {
//                 product: foundProperty
//             })
//         }
//     })
// })

module.exports = router
