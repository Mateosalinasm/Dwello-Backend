const db = require('../models')

const getProperties = (req, res) => {
    db.Property.find({})
        .then((foundProperties) => {
            console.log(foundProperties)
            if (!foundProperties) {
                res.status(404).json({ message: 'Properties not found' })
            } else {
                res.status(200).json({ data: foundProperties })
            }
        })
}

const getPropertyById = async (req, res) => {
    db.Property.findById(req.params.id)
        .then((foundProperty) => {
            if (!foundProperty) {
                res.status(404).json({ message: 'Property not found' })
            } else {
                res.status(200).json({ data: foundProperty })
            }
        })
}

const createProperty = async (req, res) => {
    db.Property.create(req.body)
        .then((createdProperty) => {
            if (!createdProperty) {
                res.status(404).json({ message: 'Can\'t create property' })
            } else {
                res.status(201).json({ data: createdProperty })
            }
        })
}

const deleteProperty = async (req, res) => {
    db.Property.findByIdAndDelete(req.params.id)
        .then((deletedProperty) => {
            if (!deletedProperty) {
                res.status(404).json({ message: 'Couldn\'t delete Property' })
            } else {
                res.status(200).json({data: deleteProperty, message: 'Property deleted'})
            }
        })
}

const updateProperty = async (req, res) => {
    db.Property.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedProperty) => {
            if (!updatedProperty) {
                res.status(404).json({ message: 'Couldn\'t update property' })
            } else {
                res.status(200).json({ data: updatedProperty, message: 'Property Updated' })
            }
        })
}

module.exports = { 
    getProperties, 
    getPropertyById, 
    createProperty, 
    deleteProperty, 
    updateProperty 
}


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

// module.exports = router
