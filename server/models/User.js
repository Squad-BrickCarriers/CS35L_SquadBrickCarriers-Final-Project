const mongoose = require('mongoose');
const Joi = require('joi-oid');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 300
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    }
})

const userValidation = user => {
    const schema = Joi.object({
        name: Joi.string().required().min(6).max(20),
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(300)
    });

    return schema.validate(user);
}

module.exports.User = mongoose.model('User', UserSchema);
module.exports.userValidation = userValidation;