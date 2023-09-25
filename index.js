import express from "express";
import bodyParser from "body-parser";

var app = express();
const port=3000;

app.use(express.static("public"));
// app.use(express.static("public", { "extensions": ["js"] }));

app.use(bodyParser.urlencoded({ extended: true }));

var todayList= new Array();
var workList= new Array();

app.post("/",(req,res)=>{
    var listName = req.body["listName"] ;
    var taskName=req.body["taskName"];
    
    
    if(listName=="Today"){
        todayList.push(taskName);
    }
    else{
        workList.push(taskName);
    }
    res.render("index.ejs",{
        todayList:todayList,
    });
});

app.get("/work",(req,res)=>{
    res.render("work.ejs",{
        workList:workList,
    });
});

app.get("/insert",(req,res)=>{ 
    res.render("insert.ejs");
});

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        todayList:todayList,
        workList:workList,
    });

    
});

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});
