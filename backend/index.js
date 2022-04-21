const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const app = express();

const userRoute = require('./routes/User');

app.use(cors());
app.use(bodyparser.json());

app.use('/user',userRoute);


app.listen(3000,()=>{
    console.log('server runing..')
})