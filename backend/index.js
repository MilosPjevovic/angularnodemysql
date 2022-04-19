const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const app = express();

const userRoute = require('./routes/User');

app.use(cors());
app.use(bodyparser.json());

app.use('/user',userRoute);



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