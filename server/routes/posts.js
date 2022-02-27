const express = require('express');
const router = express.Router();
const {Post, postValidation} = require('../models/Post');

// Functions; request handling 

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// Select a post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
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
        title: req.body.title,
        description: req.body.description
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