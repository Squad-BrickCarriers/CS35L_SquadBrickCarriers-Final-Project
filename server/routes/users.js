const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
})

// Add a user
router.post('/', async (req, res) => {
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

module.exports = router;