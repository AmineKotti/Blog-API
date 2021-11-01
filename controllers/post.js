const Post = require('../models/post')



exports.getPostById = async (req, res, next) => {
    try {
      const post = await Post.getPostById(req.params.id);
      res.status(200).json(post)
    } catch (err) {
      if(!err.statusCode) {
          err.statusCode = 500
      }
      next(err);
    }
 };
