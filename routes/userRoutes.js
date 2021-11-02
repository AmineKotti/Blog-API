const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();


router.get('/users',userController.getAllUsers);
router.get('/user/:userId',userController.getUserById);
router.post('/user',userController.postUser);


module.exports = router;