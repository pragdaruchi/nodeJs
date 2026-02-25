const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("manager", Schema)
module.exports = firstSchema