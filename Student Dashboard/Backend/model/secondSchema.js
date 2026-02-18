const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    classname: {
        type: Number,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    }
})

const secondSchema = mongoose.model("student", Schema)
module.exports = secondSchema