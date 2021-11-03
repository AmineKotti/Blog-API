const express = require("express");
const router = express.Router();
const db = require("../models");
const postController = require("../controllers/postController");

router.get("/post/:postId",postController.getPostById);
// router.get("/posts/:postId",postController.getAllPosts);


module.exports = router;