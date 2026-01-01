const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    price : {
        type:Number,
        required : true 
    },
     category:{
        type:String,
        required: true
     },
     lang : {
        type : String,
        required:true
     },
      image:{
        type : String,
        required : true
    }
})

const firstSchema =  mongoose.model("store",Schema)

module.exports = firstSchema