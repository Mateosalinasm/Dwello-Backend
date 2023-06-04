const router = require('express').Router()
const { propertiesCtrls } = require('../controllers')
//ROUTES - METHODS //
router.get('/', propertiesCtrls.getProperties)
router.get('/:id', propertiesCtrls.getPropertyById)
router.post('/', propertiesCtrls.createProperty)
router.put("/:id", propertiesCtrls.updateProperty)
router.delete('/:id', propertiesCtrls.deleteProperty)

module.exports = router 