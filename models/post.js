const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    date: Date,
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