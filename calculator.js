const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var num3=num1+num2;
    res.send("<h1>Calculated answer is</h1>"+num3);
})
app.listen(3000,function(){
    console.log("server is started on 3000");
});