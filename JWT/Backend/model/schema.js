const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
})

const firstSchema = mongoose.model("Panel1", Schema)
module.exports = firstSchema