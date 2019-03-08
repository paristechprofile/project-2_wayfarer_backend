const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    pw: {
        type: String,
        require: true,
        select: false 
    },
    image: String,
    firstName: String,
    lastName: String,
    currentCity: String,
    joinDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)