const db = require('../util/database')

module.exports = class post {
    constructor(id,title,description,image)
    {
        this.id = id,
        this.title = title,
        this.description = description,
        this.image = image
    }
    
    static getPostById(id){
        return db.execute('SELECT ' +
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
                        'WHERE postWithUser.postId = ?', [id]);
    }
}
