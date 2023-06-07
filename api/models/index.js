const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

//========= DATABASE CONNECTION =====================

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' MongoDB not connected!!!'));
db.on('connected', () => console.log('MongoDB connected'));
db.on('disconnected', () => console.log('MongoDB disconnected'));

module.exports = {
  Property: require("./properties")
}