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


//get all data

app.get('/user',(req,res)=>{

    let qr = `select * from user`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'error')
        }else if(result.length>0){
            res.send({
                message:'all user data',
                data:result
            })
        }

    })

})


//get single data 

app.get('/user/:id',(req,res)=>{

    let gID = req.params.id;

    let qr = `select * from user where id = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err){
            console.log(err, 'error')
        }else if(result.length>0){

            res.send({
                message:'get single data',
                data:result
            })
        }else {
            res.send({
                message:'data not found'
            })
        }

    })

})

//create data

app.post('/user',(req,res)=>{
    
    console.log(req.body,'postdata');

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    let qr = `insert into user(username,password,email) 
                values('${username}','${password}','${email}')`;

                console.log(qr);

        db.query(qr,(err,result)=>{

            if(err){
                console.log(err,'error')
            }else{
                res.send({
                    message:'data inserted'
                })
            }

        })        

})


//update data

app.put('/user/:id',(req,res)=>{
    
    console.log(req.body,'updatedata');

    let gID = req.params.id;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    let qr = `update user set username = '${username}', password = '${password}', email = '${email}' where id=${gID}`;

                console.log(qr);

        db.query(qr,(err,result)=>{

            if(err){
                console.log(err,'error');
            }else{
                res.send({
                    message:'data updated'
                });
            }

        })        

})


//delete single data

app.delete('/user/:id',(req,res)=>{
    
    console.log(req.body,'deletedata');

    let gID = req.params.id;
   
    let qr = `delete from user where id=${gID}`;

                console.log(qr);

        db.query(qr,(err,result)=>{

            if(err){
                console.log(err,'error');
            }else{
                res.send({
                    message:'data deleted'
                });
            }

        })        

})



app.listen(3000,()=>{
    console.log('server runing..')
})