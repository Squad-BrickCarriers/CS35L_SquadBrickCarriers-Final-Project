const mongoose = require('mongoose');
const Joi = require('joi');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
})

const postValidation = post => {
    const schema = Joi.object({
        title: Joi.string().required().min(6).max(50),
        description: Joi.string().required().min(8).max(2000)
    });

    return schema.validate(post);
}

module.exports.Post = mongoose.model('Post', PostSchema); 
module.exports.postValidation = postValidation;