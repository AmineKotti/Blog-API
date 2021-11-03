const models = require('../models');
const post = require('../models/post');
const user = require('../models/user');


// get post by post Id 
function getPostById(req,res){
    const id =req.params.postId;

    models.post.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
    res.status(500).json({
        message:"Something went wrong!"
    })
    });
}

// // get all post
// function getAllPosts(req,res){
//     const id =req.params.postId;

//     models.post.findAll({ where: {
//         postId: req.query.id
//     },
//     attributes: {
//         exclude: ['createdAt', 'updatedAt']
//     },
//     include: {
//         model: models.user,
//         attributes:['firstName', 'lastName']
//     }}).then(result => {
//         res.status(200).json(result);
//     }).catch(error => {
//     res.status(500).json({
//         message:"Something went wrong!"
//     });
//     });
// }


module.exports = {
    getPostById: getPostById
}