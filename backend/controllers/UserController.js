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
     }
}

