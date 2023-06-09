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

const seedProperty = async (req, res) => {
    const properties = [
        {
            name: "Oquean",
            price: "from $1000 a night",
            description: "Oquean is one of Malibu's renowned residences, impossible to overlook while traveling along the Pacific Coast Highway, and it was masterfully crafted by the esteemed architect Harry Gesner. Nestled atop the cliffs overlooking the vast Pacific Ocean, Oquean boasts the most breathtaking, uninterrupted panoramic vistas in all of Malibu. This extraordinary abode is an ideal venue for hosting gatherings, offering striking outdoor and indoor areas that showcase the awe-inspiring views from every angle. Indulge in the epitome of luxury and tranquility within this exceptional, contemporary marvel.",
            options: "3 bed | 3.5 baths",
            imageSrc: "/images/Malibu House/day profile.png",
            features: [
                "2 car garage",
                "Wifi",
                "Pets allowed",
                "Washer & Dryer",
                "Air Conditioning",
                "BBQ Grill"
            ],
            propertyImages: [
                "/images/Malibu House/day profile.png",
                "/images/Malibu House/2nd livingroom.png",
                "/images/Malibu House/3rd livingroom angle.png",
                "/images/Malibu House/dinning room 2nd angle.png",
                "/images/Malibu House/hot tub with ocean view.png",
                "/images/Malibu House/livingroom with view.png",
                "/images/Malibu House/malibu bedroom.png",
                "/images/Malibu House/malibu dinning room.png",
                "/images/Malibu House/master bedroom with view.png",
                "/images/Malibu House/night profile.png",
                "/images/Malibu House/ocean view.png",
                "/images/Malibu House/stairs to beach.png",
            ]
        },
        {
            name: "Cylindro",
            price: "from $320 a night",
            description:
                "Stay here",
            options: "2 bed | 1 bath",
            imageSrc:
                "/images/Cylinder House/side front view.png",
            features: [
                "Wifi",
                "EV Charger",
                "Shared Sauna",
                "Air Conditioning",
                "Washer & Dryer",
                "Private Patio & Balcony"
            ],
            propertyImages: [
                "/images/Cylinder House/side front view.png",
                "/images/Cylinder House/bedroom.png",
                "/images/Cylinder House/couple.png",
                "/images/Cylinder House/hot tub.png",
                "/images/Cylinder House/indoors.png",
                "/images/Cylinder House/kitchen.png",
                "/images/Cylinder House/love seat by hot tub.png",
                "/images/Cylinder House/pool side.png",
                "/images/Cylinder House/side front view.png",
                "/images/Cylinder House/side view.png",
                "/images/Cylinder House/terrace day.png",
                "/images/Cylinder House/terrace night.png",
            ]
        },
        {
            name: "Jungle Shed",
            price: "from $250 a night",
            description:
                "Jungle Shed is a unique property immersed in the breathtaking Atlantic Forest near Paraty. With a private waterfall and natural swimming pool, the house offers comfort and tranquility. It accommodates up to six people and features amenities like a fully equipped kitchen, yoga mats.",
            options: "2 bed | 1 bath",
            imageSrc:
                "/images/Jungle Shed/jungle shed living room.png",
            features: [
                "Wifi",
                "EV Charger",
                "Pool",
                "Washer & Dryer",
                "Private Patio & Balcony",
                "Pets Allowed"
            ],
            propertyImages: [
            ],
            propertyImages: [
                "/images/Jungle Shed/jungle shed living room.png",
                "images/Jungle Shed/jungle sauna.png",
                "images/Jungle Shed/jungle shed back view.png",
                "images/Jungle Shed/jungle shed desk.png",
                "images/Jungle Shed/jungle shed dinning table.png",
                "images/Jungle Shed/jungle shed dinning table 2.png",
                "images/Jungle Shed/jungle shed front view.png",
                "images/Jungle Shed/jungle shed master bedroom.png",
                "images/Jungle Shed/jungle shed profile view.png",
                "images/Jungle Shed/jungle shed window view.png",
                "images/Jungle Shed/jungle top bedroom.png",
                "images/Jungle Shed/Jungle.png",
            ]
        },
        {
            name: "Mirror House",
            price: "from $320 a night",
            description:
                "The Mirror House is a contemporary vacation home situated in the breathtaking South Tyrolean Dolomites near Bolzano. Surrounded by apple trees, this unique house offers a serene and picturesque retreat. With a well-equipped kitchen, a bedroom with a double bed, a spacious bathroom, and a comfortable living room, the Mirror House provides a perfect blend of modern design and natural beauty.",
            options: "1 bedroom | 1 bathroom",
            imageSrc:
                "/images/Mirror House/mirror house front profile view.png",
            features: [
                "Wifi",
                "Shared Pool",
                "Air Conditioning",
                "Private Patio & Balcony",
                "4 Car Garage",
                "Coffee Maker",
            ],
            propertyImages: [
                "/images/Mirror House/mirror house front profile view.png",
                "/images/Mirror House/mirror house back view.png",
                "/images/Mirror House/mirror house backyard.png",
                "/images/Mirror House/mirror house bedroom.png",
                "/images/Mirror House/mirror house couch.png",
                "/images/Mirror House/mirror house entrance.png",
                "/images/Mirror House/mirror house front view.png",
                "/images/Mirror House/mirror house living room.png",
                "/images/Mirror House/mirror house livingroom 2.png",
                "/images/Mirror House/mirror house pool night.png",
                "/images/Mirror House/mirror house pool.png",
                "/images/Mirror House/mirror house side view.png",
            ]

        },
        {
            name: "Placencia Village",
            price: "from $3,250 a night",
            description:
                "Placencia Village in Belize offers a private island getaway where guests can enjoy both the land and sea. The property features a pool terrace leading to a beautiful white-sand beach, with provided kayaks and paddleboards for water activities. The main house allows refreshing breezes to pass through, and guests can easily access fishing spots, whale shark habitats, and the mainland village of Placencia via a short boat ride. The property includes five bedrooms with ensuite bathrooms, a well-equipped kitchen, and additional amenities such as a golf cart (extra charges apply). Concierge service and laundry service are included, while additional airport transfers and activities/excursions are available at an extra cost.",
            options: "6 beds | 6 baths",
            imageSrc:
                "/images/Placencia Village/island aerial shot 2.png",
            features: [
                "Wifi",
                "Private Beach",
                "Private Chef",
                "Ocean Views",
                "Airport Transfer",
                "Waitstaff"
            ],
            propertyImages: [
                "/images/Placencia Village/island aerial shot 2.png",
                "/images/Placencia Village/1st beach villa.png",
                "/images/Placencia Village/2nd beach villa.png",
                "/images/Placencia Village/beach bedroom 1.png",
                "/images/Placencia Village/island aerial shot.png",
                "/images/Placencia Village/island aerial shot 3.png",
                "/images/Placencia Village/main hut aerial shot.png",
                "/images/Placencia Village/main hut bar.png",
                "/images/Placencia Village/main hut sitting area.png",
                "/images/Placencia Village/main pool.png",
                "/images/Placencia Village/private beach.png",
                "/images/Placencia Village/twin beds villa.png",
            ]
        },
        {
            name: "Desert",
            price: "from $4,500 a night",
            description:
                "Desert is an exclusive Airbnb Luxe property located in Joshua Tree, California. Designed by architect Ken Kellogg and master craftsman John Vugrin, this organic architectural marvel took over 25 years to create. Set within Joshua Tree National Park, the house offers unparalleled privacy, breathtaking views, and access to the unspoiled beauty of the park. With unique features like curved spaces and custom Hastens beds, Desert provides a truly one-of-a-kind experience for guests seeking tranquility and a connection to nature.",
            options: "3 beds | 3 baths",
            imageSrc:
                "/images/Desert House/sunset profile view.png",
            features: [
                "Wifi",
                "Mountain Views",
                "Hot Tub",
                "6 Car Garage",
                "Air Conditioning",
                "Outdoor Bar",
            ],
            propertyImages: [
                "/images/Desert House/sunset profile view.png",
                "/images/Desert House/1st bedroom angle.png",
                "/images/Desert House/2nd bedroom angle.png",
                "/images/Desert House/2nd grand kitchen angle.png",
                "/images/Desert House/above view.png",
                "/images/Desert House/breakfast area.png",
                "/images/Desert House/daylight side profile view.png",
                "/images/Desert House/grand dinning room.png",
                "/images/Desert House/grand kitchen.png",
                "/images/Desert House/outdoor shower.png",
                "/images/Desert House/rock fire place.png",
                "/images/Desert House/rock reading area.png",
            ]
        },
        {
            name: "Nebulae Loft",
            price: "from $320 a night",
            description:
                "Nebulae is a unique loft located just 20 minutes from San Jose airport. Built by Alianz, it offers a range of amenities including a decked terrace, jacuzzi, firepit, and private garden. With its architectural charm and various facilities such as a basketball court and children\'s playground, it is an ideal space for architecture lovers, romantic getaways, or simply having a good time.",
            options: "2 beds | 2 baths",
            imageSrc:
                "/images/Nebulae Loft/night profile view.png",
            features: [
                "Wifi",
                "City Skyline View",
                "Decked Terrace",
                "Private Jacuzzi",
                "Firepit",
                "Private Garden",
            ],
            propertyImages: [
                "/images/Nebulae Loft/night profile view.png",
                "/images/Nebulae Loft/1st floor view.png",
                "/images/Nebulae Loft/backyard couches.png",
                "/images/Nebulae Loft/day side profile.png",
                "/images/Nebulae Loft/livingroom 2nd angle.png",
                "/images/Nebulae Loft/master bathroom.png",
                "/images/Nebulae Loft/modern kitchen.png",
                "/images/Nebulae Loft/profile view.png",
                "/images/Nebulae Loft/purple backyard.png",
                "/images/Nebulae Loft/purple hottub.png",
                "/images/Nebulae Loft/white livingroom.png",
            ]
        },
        {
            name: "Skylodge",
            price: "from $450 a night",
            description: "Skylodge Adventure Suites in the Sacred Valley of Peru offers a unique and thrilling experience with its transparent luxury capsules that hang from the top of a mountain. Guests can appreciate the breathtaking views of the valley from their hanging bedrooms. To reach the capsules, guests must embark on an adventurous climb or hike through ziplines, making it a memorable and dream-like stay.",
            options: "1 bed | 1 bath",
            imageSrc: "/images/Skylodge/cliff side view.png",
            features: [
                "Mountain Views",
                "Luxury Capsules",
                "Breakfast",
                "Guided Rappel Tour",
                "First Aid Kit",
                "Climbing Gear",
            ],
            propertyImages: [
                "/images/Skylodge/cliff side view.png",
                "/images/Skylodge/bathroom on cliff.png",
                "/images/Skylodge/couple bedroom.png",
                "/images/Skylodge/family dinning table.png",
                "/images/Skylodge/mountain overview.png",
                "/images/Skylodge/mountain profile view.png",
                "/images/Skylodge/posing on deck.png",
                "/images/Skylodge/scenic dinning table view.png",
                "/images/Skylodge/scenic mountain view.png",
                "/images/Skylodge/skylodge beds.png",
                "/images/Skylodge/stary night view.png",
                "/images/Skylodge/sunset hike.png",
            ]
        },
        {
            name: "Le Mica",
            price: "from $270 a night",
            description: "Le Mica is a high-end micro-hosting property nestled in the heart of the boreal forest, offering an immersive experience of nature just 25 minutes from Old Quebec. This minimalist tiny house blends seamlessly into its surroundings, providing panoramic views of Laurentian Park and stunning sunsets over Beauport Lake. Note that during winter, an all-wheel drive or 4x4 car is required for access, and the two floors can be accessed via a ladder inside or an external staircase.",
            options: "1 bed | 1 bath",
            imageSrc: "/images/Le Mica/night front view.png",
            features: [
                "Wifi",
                "Valley View",
                "Private Patio & Balcony",
                "Indoor Fireplace",
                "Private Backyard",
                "Coffee Maker",

            ],
            propertyImages: [
                "/images/Le Mica/night front view.png",
                "/images/Le Mica/back day view.png",
                "/images/Le Mica/bedroom with view.png",
                "/images/Le Mica/bunk beds.png",
                "/images/Le Mica/drone front view.png",
                "/images/Le Mica/fall front view.png",
                "/images/Le Mica/livinf room angle 2.png",
                "/images/Le Mica/livingroom with fire.png",
                "/images/Le Mica/main bathroom.png",
                "/images/Le Mica/sunset back view.png",
                "/images/Le Mica/sunset profile.png",
                "/images/Le Mica/white trees view.png",
            ]
        }
    ];
    db.Property.create(properties)
        .then((createdProperties) => {
            if (!createdProperties) {
                res.status(404).json({ message: "Can\'t create properties" });
            } else {
                res.status(201).json({ data: createdProperties });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: "Error creating properties", error });
        });
}

const deleteProperty = async (req, res) => {
    db.Property.findByIdAndDelete(req.params.id)
        .then((deletedProperty) => {
            if (!deletedProperty) {
                res.status(404).json({ message: "Couldn\'t delete Property" })
            } else {
                res.status(200).json({ data: deleteProperty, message: "Property deleted" })
            }
        })
}

const updateProperty = async (req, res) => {
    db.Property.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedProperty) => {
            if (!updatedProperty) {
                res.status(404).json({ message: "Couldn\'t update property" })
            } else {
                res.status(200).json({ data: updatedProperty, message: "Property Updated" })
            }
        })
}



module.exports = {
    getProperties,
    getPropertyById,
    createProperty,
    deleteProperty,
    updateProperty,
    seedProperty,

}

