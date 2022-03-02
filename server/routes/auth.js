// use when logging in
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const router = express.Router();
const Joi = require('joi-oid');
const { User, userValidation} = require('../models/User');

//sign

const validation = user => {
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(300)
    });

    return schema.validate(user);
}

router.post('/', async (req, res) => {
    const { error } = validation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'));
    res.send(token);
});



module.exports = router;