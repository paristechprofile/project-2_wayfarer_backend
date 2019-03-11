const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/wayfarer',
    { useNewUrlParser: true })

module.exports = {
    City: require('./models/City'),
    Post: require('./models/Post'),
    User: require('./models/User')
}
