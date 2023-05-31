const router = express.Router()
const propertiesController = require('../controllers/properties.js')
const Property = require('../models/properties.js')

//Index Route
router.get('/', async (req, res) => {
    console.log('Get Route!')
    const properties = await Property.find()
    res.json(properties)
})

//Create Route
router.post('/', async (req, res) => {
    const newProperty = new Property(req.body)
    const result = await newProperty.save()
    res.json(result)
})

//New Form Route
router.get('/new', async (req, res) => {
    res.render('new_form')
})

//Show Route
router.get('/:id', async (req, res) => {
    try {
        const foundProperty = await Property.findById(req.params.id)
        res.render('property', { property: foundProperty })
    } catch (err) {
        console.log(err.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
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

        const updatedProperty = req.body
        const result = await Property.updateOne({ _id: req.params.id }, { ...updatedFields }, updatedProperty)
        res.json(result)
        res.redirect(`/dwellings/${req.params.id}`)
    } catch (err) {
        console.log(err.message)
    }
})

//Delete Route
router.delete('/:id', async (req, res) => {
    try {
        const result = await Property.deleteOne({ _id: req.params.id })
        res.json(result)
    } catch (err) {
        console.log(err.message)
    }
})

//Edit Form
router.get('/:id/edit', async (req, res) => {
    try {
        const foundProperty = await Property.findById(req.params.id)
        res.render('property/edit', { property: foundProperty })
    } catch (err) {
        console.log(err.message)
    }
})
