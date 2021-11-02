const mysql = require('mysql');

const config = require('../config/config.json');

//MySQL
// const pool = mysql.createPool({
const connection = mysql.createConnection({    
    connectionLimit : 10,
    host : config.host,
    user : config.user,
    password : config.password,
    database : config.database
})

connection.connect(function(error) {if(error) console.log(error);})

// module.exports = pool.promise();
module.exports = connection;