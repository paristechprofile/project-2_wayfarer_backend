const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wayfarer', { useNewUrlParser: true })

module.exports = {
    City: require('./citymodel.js'),
    Post: require('./postmodel.js'),
    User: require('./usermodel.js')
}
