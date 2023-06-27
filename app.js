//jshint esversion:6
const express= require("express");

const bodyParser= require("body-parser");
const date= require(__dirname+"/date.js");




const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');
var items=[];
app.get("/",function(req,res){
  
let day=date();

res.render('list', { kindOfDay: day, newItem: items });
   

});
app.get("/about",function(req,res){
    res.render('about');
})

app.post("/",function(req,res){
     var item=req.body.todo;
     items.push(item);
    res.redirect("/");

    console.log(item);
});
app.listen(process.env.PORT || 3000,function(){
    console.log("the server is listing at the port 3000");
});