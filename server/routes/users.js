const auth = require('../middleware/auth')
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const { User, userValidation } = require('../models/User');
const mongoose = require('mongoose');


// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Select a user, first verify the token, and then return the information of current user
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.User._id).select('-password');
    res.status(200).send(user);
})

// Add a user， req needs name, email, and password, return the _id, name, and email of the new user. Also it sets the x-auth-token header
router.post('/signup', async (req, res) => {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(401).send('User already existed.');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    //hash the password in the DB
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try {
        const savedUser = await user.save();
        const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
        res.status(200)
           .header('x-auth-token', token)
           .send(_.pick(savedUser, ['_id', 'name', 'email']));
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Delete a user
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.deleteOne({ _id: req.params.userId })
        res.status(200).json(removedUser);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

module.exports = router;