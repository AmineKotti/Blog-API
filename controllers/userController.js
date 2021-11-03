const models = require('../models')

// get user by user Id 
function getUserById(req,res){
    const id =req.params.userId;

    models.user.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
    res.status(500).json({
        message:"Something went wrong!"
    })
    });
}

// add new user
function addUser(req,res){
    const user ={
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email
    }

    models.user.create(user).then(result => {
        res.status(201).json(result)
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong",
            user : result
        });
    });
}

module.exports = {
    getUserById: getUserById,
    addUser: addUser
}
