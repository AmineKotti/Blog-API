const models = require('../models')


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

module.exports = {
    getPostById: getPostById,  
}