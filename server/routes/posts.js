const express = require('express');
const { trimEnd } = require('lodash');
const router = express.Router();
const { Post, postValidation } = require('../models/Post');
const mongoose = require('mongoose');

// TODO:    1. add status code
//          2. complete error handling

// Get all posts
// req: None
// res: return all posts to '/' in the order of posted time
router.get('/getall', async (req, res) => {
    try {
        const posts = await Post.find().sort('-postdate').populate('author', 'name');
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// Get all posts ranked by likes
// req: None
// res: return all posts to '/rank' in the order of likes
router.get('/rank', async (req, res) => {
    try {
        const posts = await Post.find().sort('-likes').populate('author', 'name');
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// Select posts by keywords
// req: require keyword in the body
// res: return all posts that contain the keyword in the description 
//      to '/search' in the order of posted time
router.get('/search', async (req, res) => {
    try {
        const posts = await Post.find({ description: { $regex: RegExp(req.body.keyword), $options: 'i' } })
            .sort('-postdate').populate('author', 'name');
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// Select a post
// req: require postId in the parameter
// res: return the post with the matched postId to '/:postId'
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('author', 'name');
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})

// Add a post
// req: require author(objectId), description(string), likes(integer), 
//      anonymous(boolean) in the body
// res: return the added post to '/'
router.post('/newpost', async (req, res) => {
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
// req: require postId in the parameter
// res: return the deletecount
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId })
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

// Like/Unlike a post
// req: require postId in the parameter and the id in the body
// res: return the selected post with likes and liked_users updated
router.patch('/:postId', async (req, res) => {
    try {
        const userid = mongoose.Types.ObjectId(req.body.id);
        const post = await Post.findById(req.params.postId).populate('author', 'name');

        let existed = false;
        for (let i = 0; i < post.liked_users.length; i++) {
            var id = mongoose.Types.ObjectId(post.liked_users[i]);
            if (id.equals(userid)) {
                existed = true;
                break;
            }
        }

        if (existed) {
            post.liked_users = post.liked_users.filter(id => !id.equals(userid));
            post.likes--;
        } else {
            post.liked_users.push(userid);
            post.likes++;
        }

        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;