const mongoose = require('mongoose');
const Joi = require('joi-oid');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 2000
    },
    likes: {
        type: Number,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    anonymous: {
        type: Boolean,
        required: true
    },
    postdate: { 
        type: Date, 
        required: true,
        default: Date.now
    },
})

const postValidation = post => {
    const schema = Joi.object({
        title: Joi.string().required().min(6).max(50),
        description: Joi.string().required().min(8).max(2000),
        likes: Joi.number().integer().required(),
        author: Joi.objectId().required(),
        anonymous: Joi.boolean().required()
    });

    return schema.validate(post);
}

module.exports.Post = mongoose.model('Post', PostSchema); 
module.exports.postValidation = postValidation;