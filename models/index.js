const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wayfarer', { useNewUrlParser: true })

module.exports = {
    City: require('./city.js'),
    Post: require('./post.js'),
    User: require('./user.js')
}
