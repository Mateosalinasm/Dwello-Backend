const db = require('../models')

const getLuxeProperties = (req, res) => {
    db.Luxe.find({})
        .then((foundLuxeProperties) => {
            console.log(foundLuxeProperties)
            if (!foundLuxeProperties) {
                res.status(404).json({ message: 'Properties not found' })
            } else {
                res.status(200).json({ data: foundLuxeProperties })
            }
        })
}

const createLuxeProperty = async (req, res) => {
    db.Luxe.create(req.body)
        .then((createdLuxeProperty) => {
            if (!createdLuxeProperty) {
                res.status(404).json({ message: 'Can\'t create property' })
            } else {
                res.status(201).json({ data: createdLuxeProperty })
            }
        })
}

const getLuxePropertyById = async (req, res) => {
    db.Luxe.findById(req.params.id)
        .then((foundLuxeProperty) => {
            if (!foundLuxeProperty) {
                res.status(404).json({ message: 'Property not found' })
            } else {
                res.status(200).json({ data: foundLuxeProperty })
            }
        })
}


const deleteLuxeProperty = async (req, res) => {
    db.Luxe.findByIdAndDelete(req.params.id)
        .then((deletedLuxeProperty) => {
            if (!deletedLuxeProperty) {
                res.status(404).json({ message: "Couldn\'t delete Property" })
            } else {
                res.status(200).json({ data: deletedLuxeProperty, message: "Property deleted" })
            }
        })
}

const updateLuxeProperty = async (req, res) => {
    db.Luxe.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedLuxeProperty) => {
            if (!updatedLuxeProperty) {
                res.status(404).json({ message: "Couldn\'t update property" })
            } else {
                res.status(200).json({ data: updatedLuxeProperty, message: "Property Updated" })
            }
        })
}

const seedLuxeProperty = async (req, res) => {
    const properties = [
       
        {
            name: "Stepping Rock",
            price: 1700,
            description:
                "Located in the scenic Texas Hill Country, Stepping Rock is an expansive 11-acre estate that offers a serene retreat surrounded by nature. With a blend of indoor and outdoor living spaces, including a furnished patio, rustic firepit, and charming lounging areas, this villa provides an ideal setting for relaxation and entertainment. The property features multiple bedrooms spread across the main house and a private casita, accommodating large groups comfortably. Guests can enjoy amenities such as a fully equipped kitchen, a wet bar, and a great room with living and dining areas. Outdoor activities like cornhole and alfresco dining by the built-in barbecue create memorable moments, while the nearby attractions of downtown Austin are just a short drive away. Stepping Rock offers a modern take on Texas farmhouse style and provides an exceptional vacation experience in the heart of Hill Country.",
            options: "7 beds | 6.5 baths",
            imageSrc:
                "https://a0.muscache.com/im/pictures/352d39cf-5f43-4590-aeef-5411254a0e71.jpg?im_w=1440",
            features: [
                "Wifi",
                "Pool",
                "Hot Tub",
                "6 Car Garage",
                "Air Conditioning",
                "Outdoor Bar",
            ],
            propertyImages: [
                "https://a0.muscache.com/im/pictures/a19edd72-e26e-4fae-8613-069b2ead994c.jpg?im_w=1200",
                "https://a0.muscache.com/im/pictures/1c0cd316-9a96-403f-8c50-c61af2b61a59.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/b4dc9393-0c8a-4edc-b29f-99021e41de02.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/14e3935b-f01e-471a-bcd0-d280557be7b9.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/4c7f25fd-690d-4fc0-bd46-260288641b3b.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/2473b835-c974-4edc-a30d-d7c37690440c.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/a15c92d6-2004-40b0-9cfd-3fe1b7d4fbe3.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/f6a27d68-dbdf-4e3a-bfd2-6eaaae81189c.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/2f7552e0-8dc9-4d3e-a18b-62613f8083c6.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/eb1171de-9028-4f54-925b-23b1f72f59b0.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/5f00781a-dd71-4042-afc6-5e8ca5ed1892.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/6cf7d319-f4a7-4370-aa62-556ac31d792f.jpg?im_w=1440",
            ]
        },
       
        
    ];
    db.Luxe.create(properties)
        .then((createdLuxeProperties) => {
            if (!createdLuxeProperties) {
                res.status(404).json({ message: "Can\'t create properties" });
            } else {
                res.status(201).json({ data: createdLuxeProperties });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: "Error creating properties", error });
        });
}



module.exports = {
    getLuxeProperties,
    createLuxeProperty,
    getLuxePropertyById,
    deleteLuxeProperty,
    updateLuxeProperty,
    seedLuxeProperty
}
