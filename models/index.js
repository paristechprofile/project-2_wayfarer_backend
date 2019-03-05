const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wayfarer',
    { useNewUrlParser: true })

module.exports = {
    city: require('./city'),
    post: require('./post'),
    user: require('./user')
}
