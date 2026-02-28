const express = require("express")
const cors = require("cors")

const port = 1002

const app = express()
const db = require("./config/db")
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(express.json())

app.use("/", require("./routes/route"))
app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server IS Started", port);
})