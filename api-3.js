const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.write('<h1> Welcome to my home page</h1>');
    res.write('<h1> Fawad khan</h1>');
    res.write('<h1> Waseem khan</h1>');
    res.write('<h1> Ilyas khan</h1>');
    

})
app.get('/About',function(req,res){
    res.send('Welcome to my About page');
});
app.get('/Contact',function(req,res){
    res.status(200).send('Welcome to my Contact page');
});
app.listen(4000,function(){
    console.log('server is running');


    
});

