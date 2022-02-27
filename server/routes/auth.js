// use when logging in
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const router = express.Router();
const { User, userValidation} = require('../models/User');


router.post('/', async (req, res) => {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ name: req.body.name });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'));
    res.send(token);
});



module.exports = router;