const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const firstSchema = mongoose.model("port",Schema)
module.exports = firstSchema