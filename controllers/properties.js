const express = require('express')
const axios = require('axios')
const router = express.Router()

//Routes

//Index Route
router.get('/', (req, res) => {
    Property.find({}, (err, foundProperties) => {
        if (err) {
            console.log(err.message)
        } else {
            res.render('dwellings', {
                properties: foundProperties
            })
        }
    })
})

//Create Route
router.post('/', (req, res) => {
    Property.create(req.body, (err, createdProperty) => {
        console.log(createdProperty)
        res.redirect('dwellings')
    })
})

//New Form Route
router.get('/new', (req, res) => {
    res.render('#')
})

//Show Route
router.get('/:id', (req, res) => {
    Property.findById(req.params.id, (err, foundProperty) => {
        if (err) {
            console.log(err.message)
        } else {
            res.render('#', {
                property: foundProperty
            })
        }
    })
})

router.put('/:id', (req, res) => {
    const updatedFields = {};
    if (req.body.id != '') {
        updatedFields.id = req.body.id
    }
    if (req.body.name != '') {
        updatedFields.name = req.body.name
    }
    if (req.body.href !== '') {
        updatedFields.href = req.body.href;
    }
    if (req.body.price !== '') {
        updatedFields.price = req.body.price;
    }
    if (req.body.description !== '') {
        updatedFields.description = req.body.description;
    }
    if (req.body.options !== '') {
        updatedFields.options = req.body.options;
    }
    if (req.body.imageSrc !== '') {
        updatedFields.imageSrc = req.body.imageSrc;
    }

    Property.findByIdAndUpdate (
        req.params.id,
        {...updatedFields},
        {new: true},
        (err, updatedProperty) => {
            if(err) {
                console.log(err.message)
            } else {
                console.log(updatedProperty)
                res.redirect(`/dwellings/${req.params.id}`)
            }
        }
    )
})

//Delete Route
router.delete('/:id', (req, res) => {
    Property.findByIdAndDelete(req.params.id, (err, deletedProperty) => {
        if(err) {
            console.log(err.message)
        } else {
            res.redirect('/dwellings')
        }
    })
})

//Edit Form
router.get('/:id/edit', (req, res) => {
    Property.findById(req.params.id, (err, foundProperty) => {
        if(err) { console.log(err.message) }
        else {
            res.render('#', {
                product: foundProperty
            })
        }
    })
})

module.exports = router
