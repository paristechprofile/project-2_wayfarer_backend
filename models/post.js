const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    User = require('./User');
    City = require('./City');

const PostSchema = new Schema({
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