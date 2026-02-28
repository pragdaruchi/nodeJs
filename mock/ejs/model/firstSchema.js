const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("round", Schema)
module.exports = firstSchema