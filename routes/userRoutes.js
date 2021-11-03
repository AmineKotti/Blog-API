const express = require("express");
const router = express.Router();
const db = require("../models");
const userController = require("../controllers/userController");

router.get("/user/:userId",userController.getUserById);
router.post("/user",userController.addUser);


module.exports = router;