const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wayfarer', { useNewUrlParser: true })

module.exports = {
    City: require('./city'),
    Post: require('./post'),
    User: require('./user')
}
