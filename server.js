const express = require('express');
const cors = require('cors')
const propertyRoutes = require('./routes/propertyRoutes.js')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3003

//Middleware
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/dwellings', propertyRoutes)


app.get('/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})

// const express = require("express");
// const cors = require('cors');
// const app = express();
// const dotenv = require("dotenv")
// const mongoose = require("mongoose")


// const PORT = process.env.PORT || 4005
// const propertyRoutes = require("./routes/propertyRoutes")
// // const authRoute = require("./routes/auth")
// // const usersRoute = require("./routes/users")

// dotenv.config()
// app.use(express.json())
// app.use(cors());

// mongoose.set('strictQuery', true);
// mongoose
//     .connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,

//     })
//     .then(console.log("Connected to MongoDB"))
//     .catch((err) => console.log(err));


// app.use("/dwellings", propertyRoutes);
// // app.use("/api/auth", authRoute);
// // app.use("/api/users", usersRoute);

// app.listen(PORT, () => {
//     console.log('app is running on port: ', PORT)
// });