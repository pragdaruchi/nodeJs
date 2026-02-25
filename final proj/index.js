const express = require("express")
const port = 1005
const cookie = require("cookie-parser")

const app = express()

const db = require("./config/db")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use(cookie())

app.use("/", require("./routes/route"))
app.use("/task", require("./routes/taskRoute"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Is Started:", port)
})