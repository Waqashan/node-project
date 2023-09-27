const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.json({
        "name":"waqas",
        "age":"24"
    });

});
app.listen(2000,()=>{
    console.log('server run');
})