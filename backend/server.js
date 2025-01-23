const app=require('express')();

require('dotenv').config({
    path:'./src/Config/.env'
});

const port=process.env.port;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/ping',(req,res)=>{
    res.send('This is response');
});

