"use strict";
const express = require('express');
//execute express on top off app
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//import routes
const postRoute  = require('./routes/posts');

//saftety
require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});


// connecting to DB

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);
    // Start listening to the server


app.listen(8000);