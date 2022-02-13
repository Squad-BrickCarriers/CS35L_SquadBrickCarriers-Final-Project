const express = require('express');
const router = express.Router();
const { User, userValidation } = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
})

// Select a user
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
})

// Add a user
router.post('/', async (req, res) => {
    const { error } = userValidation(req.body);
    if (error) return res.json(error);

    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
})

// Delete a user
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.deleteOne({ _id: req.params.userId })
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;