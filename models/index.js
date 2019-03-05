const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wayfarer',
    { useNewUrlParser: true })

module.exports = {
    city: require('./City'),
    post: require('./Post'),
    user: require('./User')
}
