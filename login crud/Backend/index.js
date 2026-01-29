const express = require("express")
const port = 1007

const app = express()
const db = require("./config/db")
const cors = require("cors")
const cookie = require("cookie-parser")

app.use(cors({origin : "http://localhost:5173",credentials:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookie())

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Is Started:",port);
})