const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/moke")

const db = mongoose.connection

db.once("open", (err) => {
    err ? console.log(err) : console.log("DB Is Connected");
})

module.exports = db