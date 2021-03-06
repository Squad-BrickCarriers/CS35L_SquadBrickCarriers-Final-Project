const express = require('express');
const { trimEnd } = require('lodash');
const router = express.Router();
const { Post, postValidation } = require('../models/Post');
const mongoose = require('mongoose');
const auth = require('../middleware/auth')

// Get all posts
// req: None
// res: return all posts to '/' in the order of posted time
router.get('/getall', async (req, res) => {
    try {
        const posts = await Post.find().sort('-postdate').populate('author', 'name');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Get all posts ranked by likes
// req: None
// res: return all posts to '/rank' in the order of likes
router.get('/rank', async (req, res) => {
    try {
        const posts = await Post.find().sort('-likes').populate('author', 'name');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Select posts by keywords
// req: require keyword in the params
// res: return all posts that contain the keyword in the description 
//      to '/search' in the order of posted time
router.get('/search', async (req, res) => {
    try {
        let keyword = req.query.keyword;
        const posts = await Post.find({ description: { $regex: RegExp(keyword), $options: 'i' } })
            .sort('-postdate').populate('author', 'name');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Select a post
// req: require postId in the parameter
// res: return the post with the matched postId to '/:postId'
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('author', 'name');
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Like/Dislike a post
// req: require postId in the parameter and the id in the body
// res: return the selected post with likes and liked_users updated
router.patch('/:postId/like', auth, async (req, res) => {
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
            // console.log("like succeeds")
        }

        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err });
    }
    // try{
    //     console.log(req.body.username);
    //     const post = await Post.findById(req.params.postId);
    //     if(!post.liked_users.includes(req.body.username)){
    //         await post.updateOne({ $push: {liked_users : req.body.username }});
    //         post.likes++;
    //         res.status(200).json("The post has been liked");
    //     } else {
    //         await post.updateOne({ $pull: { liked_users: req.body.username }});
    //         post.likes--;
    //         res.status(200).json("The post has been disliked");
    //     }
    // } catch (err){
    //     res.status(500).json(err);
    // }
});

router.get('/:postId/check-like', async (req, res) => {
    try {
        const userid = mongoose.Types.ObjectId(req.query.id);
        const post = await Post.findById(req.params.postId).populate('author', 'name');

        let existed = false;
        for (let i = 0; i < post.liked_users.length; i++) {
            var id = mongoose.Types.ObjectId(post.liked_users[i]);
            if (id.equals(userid)) {
                existed = true;
                break;
            }
        }
        res.status(200).send(existed);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

// Add a post
// req: require author(objectId), description(string), likes(integer), 
//      anonymous(boolean) in the body
// res: return the added post to '/'
router.post('/newpost', auth, async (req, res) => {
    const { error } = postValidation(req.body);
    if (error) return res.json(error);

    const post = new Post({
        authorname: req.body.authorname,
        author: req.body.author,
        description: req.body.description,
        likes: req.body.likes,
        anonymous: req.body.anonymous
    })

    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Delete a post
// req: require postId in the parameter
// res: return the deletecount
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId })
        res.status(200).json(removedPost);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

module.exports = router;