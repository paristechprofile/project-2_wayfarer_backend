const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wayfarer',
    { useNewUrlParser: true })

module.exports = {
    City: require('./City'),
    Post: require('./Post'),
    User: require('./User')
}
