"use strict";
const mongoose = require('mongoose');

//description of the data we use
const PostSchema = mongoose.Schema({
    description: String,
    name:String,
    url: String,
    length: Number,
    city: String,
    region: String,
    country: String,
    difficulty: String,
    thumbnail: String,
    rating: Number 
});

module.exports = mongoose.model('Posts', PostSchema);