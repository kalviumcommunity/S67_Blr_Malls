const express=require('express')
const app=require('express')();
const connectDB = require('./src/database/db')
const mallRouter = require('./src/Controllers/Mall')

require('dotenv').config({
    path:'./src/Config/.env'
});

const port=process.env.port;
const db_url=process.env.db_url

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    connectDB(db_url);

});

app.get('/ping',(req,res)=>{
    res.send('This is response');
});

app.use(express.json())

app.use('/',mallRouter)
