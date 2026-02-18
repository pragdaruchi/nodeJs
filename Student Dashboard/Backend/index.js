const express = require("express")
const port = 1004
const cors = require("cors")
const cookie = require("cookie-parser")
const app = express()

app.set("view engine", "ejs")
const db = require("./config/db")

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.use(cookie())

app.use("/", require("./routes/route"))
app.use("/student", require("./routes/studentRoute"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Is Started : ", port);
})