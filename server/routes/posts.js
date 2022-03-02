const express = require('express');
const router = express.Router();
const { Post, postValidation } = require('../models/Post');

// TODO:    1. add status code
//          2. complete error handling

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort('-postdate').populate('author', 'name');
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// Get all posts ranked by likes
router.get('/rank', async (req, res) => {
    try {
        const posts = await Post.find().sort('-likes').populate('author', 'name');
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// Select posts by keywords
router.get('/search', async (req, res) => {
    try {
        const posts = await Post.find({
            $or: [
                { title: { $regex: RegExp(req.body.keyword), $options: 'i' } },
                { description: { $regex: RegExp(req.body.keyword), $options: 'i' } },
            ]
        })
        .sort('-postdate').populate('author', 'name');
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// Select a post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('author', 'name');
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})

// Add a post
router.post('/', async (req, res) => {
    const { error } = postValidation(req.body);
    if (error) return res.json(error);

    const post = new Post({
        author: req.body.author,
        description: req.body.description,
        likes: req.body.likes,
        anonymous: req.body.anonymous
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

// Delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId })
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;