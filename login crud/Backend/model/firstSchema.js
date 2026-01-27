const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
})

const firstSchema = mongoose.model("end", Schema)
module.exports = firstSchema