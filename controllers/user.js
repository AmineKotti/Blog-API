const User = require('../models/user')


exports.getAllUsers = async (req, res, next) => {
   try {
     const [allUsers] = await User.getAllUsers();
     res.status(200).json(allUsers)
   } catch (err) {
     if(!err.statusCode) {
         err.statusCode = 500
     }
     next(err);
   }
};

exports.getUserById = async (req, res, next) => {
    try {
      const user = await User.getUserByUserId(req.params.id);
      res.status(200).json(user[0])
    } catch (err) {
      if(!err.statusCode) {
          err.statusCode = 500
      }
      next(err);
    }
 };


exports.post = async (req, res, next) => {
    try {
      const postResponse = await User.postUser(req.body.firstName,req.body.lastName,req.body.email);
      res.status(201).json(postResponse)
    } catch (err) {
      if(!err.statusCode) {
          err.statusCode = 500
      }
      next(err);
    }
 };

