const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const postRoute = require('./routes/posts');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoute);

// Main route
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true}, 
    () => {
    console.log('Connected to DB')
})

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Listening on port 3000...", host, port)
}) 