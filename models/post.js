const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    User = require('./user');
    City = require('./city');

const PostSchema = new Schema({
    date: { type: Date, default: Date.now },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City' 
    },
    text: String
})

module.exports = mongoose.model('Post', PostSchema)