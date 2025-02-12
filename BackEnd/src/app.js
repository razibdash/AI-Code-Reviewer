const express=require('express');
const aiRoute=require('./routes/ai.route');
const app=express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use('/api',aiRoute);
module.exports=app;