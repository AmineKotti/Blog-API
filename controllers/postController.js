const Post = require('../models/postModel')
const connection = require('../util/database')


//get post by id
exports.getPostById =  (req,res) =>{       
            connection.query('SELECT ' +
                                        'postWithUser.postId, '+
                                        'postWithUser.title, '+
                                        'postWithUser.description, '+
                                        'postWithUser.image, '+
                                        'postWithUser.postUserId , '+
                                        'postWithUser.postFirstName, '+
                                        'postWithUser.postLastName, '+
                                        'postWithUser.postEmail, '+
                                        'commentWithUser.commentId , '+
                                        'commentWithUser.text, '+
                                        'commentWithUser.date, '+
                                        'commentWithUser.commentUserId , '+
                                        'commentWithUser.commentFirstName, '+
                                        'commentWithUser.commentLastName, '+
                                        'commentWithUser.commentEmail '+
                                'FROM '+ 
                                          '(SELECT '+
                                                  'post.id as postId, '+
                                                  'post.idUser postUser, '+
                                                  'post.title, '+
                                                  'post.description, '+
                                                  'post.image, '+
                                                  'user.id as postUserId, '+
                                                  'user.firstName as postFirstName, '+
                                                  'user.lastName as postLastName, '+
                                                  'user.email as postEmail '+
                                          'FROM post,user WHERE post.idUser = user.id '+
                                          ') postWithUser '+        
                                'JOIN ' +
                                          '(SELECT '+
                                                  'comment.id as commentId, '+
                                                  'comment.text, '+
                                                  'comment.date, '+
                                                  'comment.idPost, '+
                                                  'user.id as commentUserId, '+
                                                  'user.firstName as commentFirstName, '+
                                                  'user.lastName as commentLastName, '+
                                                  'user.email as  commentEmail '+
                                          'FROM comment,user WHERE comment.idUser = user.id '+
                                          ') commentWithUser '+
                                'ON CommentWithUser.idPost = postWithUser.postId ' +
                                'WHERE postWithUser.postId = ?', [req.params.postId] , (err,rows) => {
                        
                                var result = [], index = {};
                                rows.forEach(function (row) {
                                    if ( !(row.id in index) ) {
                            
                                    index[row.id] = {
                                        id: row.postId,
                                        title: row.title,
                                        description: row.description,
                                        image: row.image,
                                        sharedBy : {
                                            id : row.postUserId,
                                            firstName: row.postFirstName,
                                            lastName: row.postLastName,
                                            email: row.postEmail
                                        },
                                        comments: []
                                    };
                                        result.push(index[row.id]);
                                    }
                                    index[row.id].comments.push({
                                        id: row.commentId,
                                        text: row.text,
                                        date: row.date,
                                        user:{
                                        id : row.commentUserId,
                                        firstName: row.commentFirstName,
                                        lastName: row.commentLastName,
                                        email: row.commentEmail,
                                        }
                                    });
                                });
                                   res.send(result[0])
                                })
}






