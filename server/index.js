const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users')
const auth = require('./routes/auth');

if (!config.get('jwtPrivateKey')){
// if (!config.has('jwtPrivateKey')){  // using 'has' might be buggy
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/auth', auth);

// Main route
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => {
    console.log('Connected to DB')
})

const server = app.listen(8000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Listening on port 8000...", host, port)
}) 