const db = require('../db/db');

module.exports = {

    get :(req,res)=>{
        const qr = `select * from user`;
        db.connect((err)=>{
            if(err) throw (err);
            db.query(qr,(err,result) => {
               // db.destroy()
                if(err){
                    return err.message;
                }else{
                    res.status(200).json(
                         result
                    )
                }
            })
        })
     },


     getById: (req,res)=>{
       const gID = req.params.id;
       const qr = `select * from user where id = ${gID}`;
        db.connect((err)=>{
            if(err) throw (err);
            db.query(qr,(err,result) => {
             //   db.destroy();
                if(err){
                    return err.message;
                }else{
                    res.status(200).json(
                         result
                    )
                }
            })
        })
     },



     createUser: (req,res)=>{
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email; 
        const qr = `insert into user(username,password,email) 
        values('${username}','${password}','${email}')`;
        
         db.connect((err)=>{
             if(err) throw (err);
             db.query(qr,(err,result) => {
              //   db.destroy();
                 if(err){
                     return err.message;
                 }else{
                     res.status(200).json(
                        {message:'inserted data'}
                     )
                 }
             })
         })
      },

    
      
      updateUser: (req,res)=>{
        const gID = req.params.id;
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const qr = `update user set username = '${username}', password = '${password}', email = '${email}' where id=${gID}`;
        
         db.connect((err)=>{
             if(err) throw (err);
             db.query(qr,(err,result) => {
              //   db.destroy();
                 if(err){
                     return err.message;
                 }else{
                     res.status(200).json(
                        {message:'update data'}
                     )
                 }
             })
         })
      },



      deleteUser: (req,res)=>{
        const gID = req.params.id;
        const qr = `delete from user where id=${gID}`;
        
         db.connect((err)=>{
             if(err) throw (err);
             db.query(qr,(err,result) => {
              //   db.destroy();
                 if(err){
                     return err.message;
                 }else{
                     res.status(200).json(
                        {message:'deleted data'}
                     )
                 }
             })
         })
      }
}

