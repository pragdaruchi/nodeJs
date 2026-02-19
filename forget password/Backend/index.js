const express = require("express")
const port = 1002
const cors = require("cors")
const cookie = require("cookie-parser")
const session = require("express-session")

const app = express()

const db = require("./config/db")
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())

app.use(cookie())
app.use(session({
    name: "session",
    secret: "rnw",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60, httpOnly: 100 * 100 * 60 }
}))

app.use("/", require("./routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Is Started:", port);
})