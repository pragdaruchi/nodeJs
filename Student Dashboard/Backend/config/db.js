const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ruchi:890561@cluster0.a8e3u9t.mongodb.net/?appName=Cluster0").then(() => {
    console.log("DB Is Connected");

}).catch((err) => {
    console.log(err);

})

    
// const db = mongoose.connection

// db.once("open", (err) => {
//     err ? console.log(err) : console.log("DB Is COnnected");
// })

// module.exports = db