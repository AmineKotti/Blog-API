const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());


const userRouters = require('./routes/userRoutes.js')
const postRouters = require('./routes/post.js')

const errorController = require('./controllers/error')

// app.use(errorController.get404);
// app.use(errorController.get500);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authentication');
    next(); 
});


app.use('/', userRouters);
app.use('/', postRouters);


// //MySQL
// const pool = mysql.createPool({
//     connectionLimit : 10,
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'blogdb'
// })


// //Get a user by ID
// app.get('/users/:userId',(req,res) =>{

//     pool.getConnection((err,connection) => {
//         if(err) throw err
//         console.log('connected as id ' + connection.threadId)
         
//         connection.query('SELECT * FROM user WHERE id = ?', [req.params.userId], (err,rows) => {
//               connection.release() // return the connection to pool 

//               if(!err) {
//                   res.send(rows)
//               }else{
//                   console.log(err)
//               }
//         })
//     })
// })

// //Add a user 
// app.post('/user',(req,res) =>{

//     pool.getConnection((err,connection) => {
//         if(err) throw err
//         console.log('connected as id ' + connection.threadId)

//         const params = req.body
         
//         connection.query('INSERT INTO user SET ?', params, (err) => {
//               connection.release() // return the connection to pool 

//               if(!err) {
//                   res.send('user with the user name ' + params.firstName + ' has been added.')
//               }else{
//                   console.log(err)
//               }
//         })
//     })
// })

// //Get a post by ID
// app.get('/posts/:postId',(req,res) =>{

//     pool.getConnection((err,connection) => {
//         if(err) throw err
//         console.log('connected as id ' + connection.threadId)
         
//         connection.query('SELECT ' +
//                                 'postWithUser.postId, '+
//                                 'postWithUser.title, '+
//                                 'postWithUser.description, '+
//                                 'postWithUser.image, '+
//                                 'postWithUser.postUserId , '+
//                                 'postWithUser.postFirstName, '+
//                                 'postWithUser.postLastName, '+
//                                 'postWithUser.postEmail, '+
//                                 'commentWithUser.commentId , '+
//                                 'commentWithUser.text, '+
//                                 'commentWithUser.date, '+
//                                 'commentWithUser.commentUserId , '+
//                                 'commentWithUser.commentFirstName, '+
//                                 'commentWithUser.commentLastName, '+
//                                 'commentWithUser.commentEmail '+
//                             'FROM '+ 
//                                         '(SELECT '+
//                                                 'post.id as postId, '+
//                                                 'post.idUser postUser, '+
//                                                 'post.title, '+
//                                                 'post.description, '+
//                                                 'post.image, '+
//                                                 'user.id as postUserId, '+
//                                                 'user.firstName as postFirstName, '+
//                                                 'user.lastName as postLastName, '+
//                                                 'user.email as postEmail '+
//                                         'FROM post,user WHERE post.idUser = user.id '+
//                                         ') postWithUser '+        
//                             'JOIN ' +
//                                         '(SELECT '+
//                                                 'comment.id as commentId, '+
//                                                 'comment.text, '+
//                                                 'comment.date, '+
//                                                 'comment.idPost, '+
//                                                 'user.id as commentUserId, '+
//                                                 'user.firstName as commentFirstName, '+
//                                                 'user.lastName as commentLastName, '+
//                                                 'user.email as  commentEmail '+
//                                         'FROM comment,user WHERE comment.idUser = user.id '+
//                                         ') commentWithUser '+
//                             'ON CommentWithUser.idPost = postWithUser.postId ' +
//                             'WHERE postWithUser.postId = ?', [req.params.postId] , (err,rows) => {
//               connection.release() // return the connection to pool 
//               if(!err) {
//                 //   res.send(rows)
//                 var result = [], index = {};
//                 rows.forEach(function (row) {
//                     if ( !(row.id in index) ) {
//                         console.log(row)
//                         index[row.id] = {
//                             id: row.postId,
//                             title: row.title,
//                             description: row.description,
//                             image: row.image,
//                             sharedBy : {
//                                 id : row.postUserId,
//                                 firstName: row.postFirstName,
//                                 lastName: row.postLastName,
//                                 email: row.postEmail
//                             },
//                             comments: []
//                         };
//                         result.push(index[row.id]);
//                     }
//                     index[row.id].comments.push({
//                         id: row.commentId,
//                         text: row.text,
//                         date: row.date,
//                         user:{
//                             id : row.commentUserId,
//                             firstName: row.commentFirstName,
//                             lastName: row.commentLastName,
//                             email: row.commentEmail,
//                         }
//                     });
//                 });
//                 res.send(result[0])
                
//               }else{
//                   console.log(err)
//               }
//         })
//     })
// })

// Listen on enviroment port or 3000
app.listen(port,()=> console.log(`Listen on port ${port}`))

