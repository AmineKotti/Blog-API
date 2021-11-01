const db = require('../util/database')

module.exports = class user {
    constructor(id,firstName,lastName,email)
    {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email
    }

    static getAllUsers(){
        return db.execute('SELECT * FROM user');
    }

    static getUserByUserId(id){
        return db.execute('SELECT * FROM user WHERE id = ?', [id]);
    }

    static postUser(firstName,lastName,email){
        return db.execute('INSERT INTO user(firstName,lastName,email) VALUES (?,?,?)',[firstName,lastName,email]);
    }

    
    
    
    

}
