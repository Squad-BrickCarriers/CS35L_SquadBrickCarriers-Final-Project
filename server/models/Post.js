const mongoose = require('mongoose');
const Joi = require('joi-oid');

const PostSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000
    },
    likes: {
        type: Number,
        required: true
    },
    anonymous: {
        type: Boolean,
        required: true
    },
    liked_users: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
        default: []
    }],
    postdate: { 
        type: Date, 
        required: true,
        default: Date.now
    }
})

const postValidation = post => {
    const schema = Joi.object({
        author: Joi.objectId().required(),
        description: Joi.string().required().min(1).max(2000),
        likes: Joi.number().integer().required(),
        anonymous: Joi.boolean().required()
    });

    return schema.validate(post);
}

module.exports.Post = mongoose.model('Post', PostSchema); 
module.exports.postValidation = postValidation;