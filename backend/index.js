const express=require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app=express();

app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(401).json({
            msg:"You send the wrong input",
        })
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo Created"
    })
})

app.get("/todo", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/complete", async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=createTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(401).json({
            msg:"You send the wrong input",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})
