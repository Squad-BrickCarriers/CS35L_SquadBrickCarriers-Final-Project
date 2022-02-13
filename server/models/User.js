const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema); 