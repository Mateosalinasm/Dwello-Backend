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
            name: "Fox Rock",
            price: 3750,
            description:
                "Perched atop the breathtaking landscape of Breckenridge, Fox Rock offers an unforgettable mountain retreat for up to 14 guests. With panoramic mountain and resort views, this modern lodge boasts an array of amenities including an indoor pool, arcade, and theater, ensuring non-stop entertainment for all. Outside, three levels of scenic entertainment space invite guests to enjoy barbecues, alfresco dining, and relaxation in the hot tub. With world-class skiing just moments away, Fox Rock is the ultimate destination for both adventure and relaxation.",
            options: "5 beds | 6.5 baths",
            imageSrc:
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/8d8d0cac-316e-4d75-be45-b730469b3dd1?im_w=1200",
            features: [
                "Wifi",
                "Indoor Pool",
                "Hot Tub",
                "2 Car Garage",
                "Mountain View",
                "Outdoor Bar",
            ],
            propertyImages: [
               "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/8d8d0cac-316e-4d75-be45-b730469b3dd1?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/f7f197e5-40c5-4a78-a3ac-5fd89f5a98a1?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/5b3793e4-2c54-4cfc-bb06-9fd27450de12?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/c527e0c1-8549-4f07-98c0-4176d28cb892?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/e6428a2b-d4dd-4644-ac7b-6a3316c9aa5f?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/03083af3-4214-46c9-8c9c-33c7a1168217?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/aff0e38a-391b-46af-8e58-a1ffe1f7fc0f?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/96144c00-3ff8-471d-b66a-86930ce2f56f?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/80756866-decb-452b-84a3-3b5a5e03bd0c?im_w=1200",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/3c6f0b68-c259-4dd5-9ae4-232c95bdac08?im_w=1440",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/75f6de7d-7b2a-4274-952b-36b3eff8bf93?im_w=1440",
                "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/e526812e-de5f-41ea-ab2c-5c434b18fbdf?im_w=1440",
            ]
        },
        {
            name: "Woolbrook Reservoir",
            price: 1100,
            description: "Nestled in Sidmouth, Woolbrook Reservoir is a luxurious and uniquely designed celebration home that offers a sprawling private garden with stunning countryside views, a hot tub, and a bar. This spacious property boasts a light-filled central courtyard surrounded by 6 bedrooms, 6 bathrooms, a high-spec kitchen/diner, a sitting room, and a games room. Bi-fold doors seamlessly connect the indoor and outdoor spaces, leading to a covered BBQ area with additional seating, a table tennis table, and a pool table. Woolbrook Reservoir is perfect for gatherings, rain or shine. Families with young children will appreciate the range of baby and toddler-friendly items provided. The property also features a breathtaking triple-volume foyer, a cozy living room with a fireplace, a well-equipped kitchen, a snug with a bio-ethanol fireplace, and a dining room with a table for 10 (extendable to 16). Upstairs, there are five beautifully decorated bedrooms, including a master bedroom with a dressing room, a furnished deck, and spectacular views. The property also offers ample parking and an EV charger.",
            options: "6 beds | 4 baths",
            imageSrc: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/2c2221c3-d014-4b4f-a850-29ee47620304.jpeg?im_w=1200",
            features: [
                "Wifi",
                "Indoor Pool",
                "Hot Tub",
                "2 Car Garage",
                "EV Charger",
                "Outdoor Bar",
            ],
            propertyImages: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/2c2221c3-d014-4b4f-a850-29ee47620304.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/840ef774-99e8-4028-8848-94410a1384e0.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/9206c052-4018-410f-9f78-06473254d661.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/20f87392-5f7d-4e61-8026-1d32074abede.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/cbe3056a-f2ea-48c8-8671-09abe40162fc.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/1eef4c6e-ad3e-4e70-abe1-aaaae186e17c.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/ccbef9f8-71db-49d3-b19f-34af38a40097.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/38147dee-4b01-4b21-b4c7-7312b55f957b.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/326a9751-fa74-41c8-811c-1d66892c0e54.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/c3be367a-bf8e-4889-9117-c4c2773eda9d.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/9f410738-b7c1-47bb-a62f-7e985adf0127.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-699095541647431947/original/ea373b9d-98aa-47b7-b615-8402bcccb4bb.jpeg?im_w=1440",
            ]
        },
        {
            name: "Sunset Ridge",
            price: 13500,
            description: "Perched amidst the San Juan Mountains, Sunset Ridge is a stunning mid- century estate offering breathtaking panoramic views and a serene pond.This designer mountain retreat features floor - to - ceiling glass walls, allowing you to soak in the wild beauty of the West.Sip a glass of wine by the sunken fire pit or explore the expansive interiors.The property boasts six beautifully appointed bedrooms, including a master suite with a fireplace and walk -in closet.With a fully equipped kitchen, formal dining area, wet bar, home theater, games room, and indoor hot tub, Sunset Ridge provides ample entertainment options.Outdoor amenities include alfresco dining, a fire pit, and a balcony to enjoy the mountain vistas.Conveniently located near the slopes and Alta Lakes, this estate offers a perfect mountain getaway.",
            options: "10 beds | 8.5 baths",
            imageSrc: "https://a0.muscache.com/im/pictures/c92757c4-97a7-4b19-8f3e-658687382318.jpg?im_w=1440",
            features: [
                "Wifi",
                "Indoor Pool",
                "Hot Tub",
                "6 Car Garage",
                "Lake View",
                "Outdoor Bar",
            ],
            propertyImages: [
                "https://a0.muscache.com/im/pictures/c92757c4-97a7-4b19-8f3e-658687382318.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/865bf42e-1902-4a6c-ba33-ce6eae4703e4.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/eaaae1c5-944c-4e1d-9348-f63e68315251.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/279f1649-639a-43f0-b48d-ebd2a62ff675.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/296110ed-a02e-4251-80a9-6e8e4073b21d.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/afbc8b53-f3ed-41c5-b643-1689827b5531.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/28aad9ae-6f55-44c0-9749-011abf51acf4.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/ae37dce8-0017-4421-9c4d-f9c846eca117.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/b035f8b1-8498-4030-8736-c93ffd940036.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/d09a612c-31c8-4fb4-b034-9a5eab2ee95d.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/02af8965-4f05-4892-b6b0-c31b19e27b11.jpg?im_w=1440",
                "https://a0.muscache.com/im/pictures/2eecdd39-995c-4a4b-9d3c-7d28772de4ea.jpg?im_w=1440",
            ]
        },
        {
            name: "Villa Chavez",
            price: 2800,
            description: "Villa Chavez offers a luxurious retreat overlooking Cabo San Lucas Bay, where you can enjoy the captivating sight of fishing boats setting sail each morning. This spacious vacation rental accommodates up to 18 guests, making it ideal for family reunions and corporate retreats. Start your day with an alfresco breakfast and bask in the pool's built-in loungers. The villa features eight beautifully furnished bedrooms, each with its own ensuite bathroom and terrace boasting stunning ocean or mountain views. Indulge in the fully equipped kitchen, formal dining area, and wet bar, or unwind in the home theater, game room, or home gym. Outside, you'll find a saltwater infinity pool, tennis court, terrace, fire pit, and breathtaking ocean and mountain views. With excellent shopping, dining, and a beautiful beachfront nearby, Villa Chavez provides the perfect backdrop for an unforgettable getaway.",
            options: "9 beds | 8.5 baths",
            imageSrc: "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/4ae8ea3f-4c7b-43a7-8621-e21f1b6d693e.jpeg?im_w=1200",
            features: [
                "Wifi",
                "Infinity Salt Water Pool",
                "Tennis Court",
                "6 Car Garage",
                "Ocean View",
                "Outdoor Bar",
            ],
            propertyImages: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/4ae8ea3f-4c7b-43a7-8621-e21f1b6d693e.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/92b204b1-9d83-4a9a-85c1-4b12e4336c23.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/96747670-806c-4b76-9f4e-4536359ce174.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/9577f5c6-ecc8-44a6-9d55-17173b6fbc6b.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/64d6724b-dd99-4b19-ab59-adb2a9fa9c90.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/cd752af0-f8ad-490c-b6d5-94b687341a9c.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/b379b16d-d979-4fab-880b-5448fb47e654.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/376c0de8-13bb-4d2b-9bf5-e55ff53ab783.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/9948c9fc-4b35-464a-a62d-25981b559925.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/d5fe15d7-840e-4f87-8e87-a393386b5f2b.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/039448ed-9d22-44af-8d2e-23f2548322da.jpeg?im_w=1440",
                "https://a0.muscache.com/im/pictures/miso/Hosting-736227237749038373/original/070fbd42-f342-46c3-b202-2116ce3109ca.jpeg?im_w=1440",
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
