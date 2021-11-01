const express = require('express');

const userController = require('../controllers/user.js');

const router = express.Router();


router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUserById);
router.post('/',userController.post);


module.exports = router;