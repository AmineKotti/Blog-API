const express = require('express');

const postController = require('../controllers/postController.js');

const router = express.Router();

router.get('/post/:postId',postController.getPostById);


module.exports = router;