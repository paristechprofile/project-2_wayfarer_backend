const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: String,
    state: String,
    country: String,
    image: String
})

module.exports = mongoose.model('city', CitySchema)