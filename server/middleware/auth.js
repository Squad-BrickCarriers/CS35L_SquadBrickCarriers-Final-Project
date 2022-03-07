const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('First Sign in');

    try{
        const decode = jwt.verify(token, config.get('jwtPrivateKey'));
        req.User = decode;
        next();
    }
    catch(ex){
        res.status(400).send('Invalid token.')
    }
}

module.exports = auth;