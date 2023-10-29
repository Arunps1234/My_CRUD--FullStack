const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/My_CRUD").then(res=>{
    console.log("Connected to Databse")
}).catch(err=>{
    console.log("Failed to connected database")
})