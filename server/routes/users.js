const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const router = express.Router();
const { User, userValidation } = require('../models/User');
const mongoose = require('mongoose');

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
router.post('/signup', async (req, res) => {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ name: req.body.name });
    if (user) return res.status(400).send('Username already existed.');

    user = new User(_.pick(req.body, ['name', 'password']));
    //hash the password in the DB
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try {
        const savedUser = await user.save();
        res.send(_.pick(savedUser, ['_id', 'name']));
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