const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;

db.url = 'mongodb+srv://alfonso:alfonso123@cluster0.bmyg4.mongodb.net/caldar?retryWrites=true&w=majority'

//db.building = require('./buildings.js')(mongoose);

module.exports = db;