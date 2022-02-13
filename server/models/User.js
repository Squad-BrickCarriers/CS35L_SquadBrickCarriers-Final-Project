const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    }
})

const userValidation = user => {
    const schema = Joi.object({
        name: Joi.string().required().min(6).max(20),
        password: Joi.string().required().min(8).max(20)
    });

    return schema.validate(user);
}

const User = mongoose.model('User', UserSchema);

module.exports.User = User;
module.exports.userValidation = userValidation;