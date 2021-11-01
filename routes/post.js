const express = require('express');

const postController = require('../controllers/post.js');

const router = express.Router();

router.get('/:id',postController.getPostById);


module.exports = router;