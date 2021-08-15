"use strict";
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Gets all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
// submits post
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        description: req.body.description,
        url: req.body.url,
        city: req.body.city,
        region: req.body.region,
        country: req.body.country,
        difficulty: req.body.difficulty,
        thumbnail: req.body.thumbnail,
        rating: req.body.rating
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete Post 
router.delete('/:postId', async (req, res) => {
    try {
        const deletePost = await Post.remove({_id: req.params.postId});
        res.json(deletePost);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                title: req.body.title,
                name: req.body.name,
                description: req.body.description,
                url: req.body.url,
                city: req.body.city,
                region: req.body.region,
                country: req.body.country,
                difficulty: req.body.difficulty,
                thumbnail: req.body.thumbnail,
                rating: req.body.rating
            }
        });
        res.json(updatedPost);

    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;