const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true } );

module.exports = {
    user: require('./user'),
    cities: require('./cities'),
    post: require('./post')
}