const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wayfarer', { useNewUrlParser: true })

module.exports = {
    City: require('./City.js'),
    Post: require('./Post.js'),
    User: require('./User.js')
}
