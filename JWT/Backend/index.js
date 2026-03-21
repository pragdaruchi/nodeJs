const express = require("express")
const port = 1002
const cooki = require("cookie-parser")

const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(cooki())
const db = require("./config/db")

app.use("/",require("./routes/route"))
app.use("/manager",require("./routes/routes"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Is Started :", port);
})