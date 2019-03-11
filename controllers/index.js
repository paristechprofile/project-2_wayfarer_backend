const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wayfarer', { useNewUrlParser: true })
module.exports = {
    user: require('./user'),
    cities: require('./cities'),
    post: require('./post')
}