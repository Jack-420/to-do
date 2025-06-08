const express=require("express");
const { createTodo } = require("./types");
const app=express();

app.use(express.json());

app.post("/todo",function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(401).json({
            msg:"You send the wrong input",
        })
        return;
    }
    // put it in mongo
})

app.get("/todo",function(req,res){

})

app.put("/complete",function(req,res){
    const updatePayload=req.body;
    const parsedPayload=createTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(401).json({
            msg:"You send the wrong input",
        })
        return;
    }
    // put it in mongo
})
