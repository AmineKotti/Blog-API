const User = require('../models/userModel')
const connection = require('../util/database')


//get all users
exports.getAllUsers = (req,res) =>{       
      connection.query('SELECT * FROM user', (err,rows) => {
            if(!err) {
                res.send(rows)
            }else{
                console.log(err)
            }
      })
  }

//get user by id
exports.getUserById =  (req,res) =>{       
    connection.query('SELECT * FROM user WHERE id = ?', [req.params.userId], (err,rows) => {
          if(!err) {
              res.send(rows)
          }else{
              console.log(err)
          }
    })
}
     
// add a new user
exports.postUser =  (req,res) =>{      
  const params = req.body
  connection.query('INSERT INTO user SET ?', params, (err) => {

    if(!err) {
        res.send(params)
    }else{
        console.log(err)
    }
})
}
  



