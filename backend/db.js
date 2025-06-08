const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mrinal:nandu@cluster1.oxlzyha.mongodb.net/todo")

const todoSchema = mongoose.Schema({
    title : string,
    description : string,
    completed : Boolean 
})

const todo = mongoose.model('todo',todoSchema);
module.exports{
    todo
}