const db = require('mysql2').createConnection({
    host:'localhost',
    user:'root',
    password:'driftkiller',
    database:'users',
    port:3306,
    waitForConnections: true,
    
});



  
module.exports = db;

