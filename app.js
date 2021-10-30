const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())

//MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'blogdb'
})

// //Get all user
// app.get('/users',(req,res) =>{

//     pool.getConnection((err,connection) => {
//         if(err) throw err
//         console.log('connected as id ' + connection.threadId)
         
//         connection.query('SELECT * FROM user',(err,rows) => {
//               connection.release() // return the connection to pool 

//               if(!err) {
//                   res.send(rows)
//               }else{
//                   console.log(err)
//               }
//         })
//     })
// })

//Get a user by ID
app.get('/users/:userId',(req,res) =>{

    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
         
        connection.query('SELECT * FROM user WHERE id = ?', [req.params.userId], (err,rows) => {
              connection.release() // return the connection to pool 

              if(!err) {
                  res.send(rows)
              }else{
                  console.log(err)
              }
        })
    })
})

//Get a user by ID
app.get('/users/:userId',(req,res) =>{

    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
         
        connection.query('SELECT * FROM user WHERE id = ?', [req.params.userId], (err,rows) => {
              connection.release() // return the connection to pool 

              if(!err) {
                  res.send(rows)
              }else{
                  console.log(err)
              }
        })
    })
})

//Add a user 
app.post('/user',(req,res) =>{

    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)

        const params = req.body
         
        connection.query('INSERT INTO user SET ?', params, (err) => {
              connection.release() // return the connection to pool 

              if(!err) {
                  res.send('user with the user name ' + params.firstName + ' has been added.')
              }else{
                  console.log(err)
              }
        })
    })
})




// Listen on enviroment port or 3000
app.listen(port,()=> console.log(`Listen on port ${port}`))

