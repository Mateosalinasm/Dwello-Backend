const mongoose = require("mongoose")
const MONGODB_URL = process.env.MONGODB_URL;

//========= DATABASE CONNECTION =====================

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' MongoDB not connected!!!' + MONGODB_URL));
db.on('connected', () => console.log('MongoDB connected'));
db.on('disconnected', () => console.log('MongoDB disconnected'));

module.exports = {
    Property: require("./properties")
}