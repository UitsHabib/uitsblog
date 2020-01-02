const mysql = require('mysql');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'programming_hub'
});

// connect to database
connection.connect(function(err){
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = connection;