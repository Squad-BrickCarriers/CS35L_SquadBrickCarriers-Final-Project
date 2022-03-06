// use when logging in
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const Joi = require('joi-oid');
const { User } = require('../models/User');


//sign in method

const validation = user => {
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(300)
    });

    return schema.validate(user);
}

// need email and password, if correct it will return the token, and set the x-auth-token header
router.post('/login', async (req, res) => {
    const { error } = validation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
    res.header('x-auth-token', token).send(token);
});



module.exports = router;