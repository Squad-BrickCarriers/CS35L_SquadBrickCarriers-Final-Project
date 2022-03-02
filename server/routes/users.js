const auth = require('../middleware/auth')
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const router = express.Router();
const { User, userValidation } = require('../models/User');
const mongoose = require('mongoose');

// TODO:    1. add status code
//          2. complete error handling

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
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.User._id).select('-password');
    res.send(user);
})

// Add a user
router.post('/signup', async (req, res) => {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already existed.');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    //hash the password in the DB
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try {
        const savedUser = await user.save();
        const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
        res.header('x-auth-token', token)
           .send(_.pick(savedUser, ['_id', 'name', 'email']));
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