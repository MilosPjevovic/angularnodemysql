const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database connection

const db = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'driftkiller',
        database:'users',
        port:3306
})

//check database connection

db.connect(err=>{
    if(err){
        console.log(err,'dberr')
    }else{
        console.log('database connected...')
    }
})


app.listen(3000,()=>{
    console.log('server runing..')
})