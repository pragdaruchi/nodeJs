const express = require("express")
const port = 1008
const path = require("path")
const app = express()
const passport = require("passport")
const session = require("express-session")

app.set("view engine","ejs")

const db = require("./config/db")
app.use(express.urlencoded({extended:true}))
app.use("/",express.static(path.join(__dirname,"public")))


app.use(session({
    name:"local",
    secret:"rnw",
    resave:true,
    saveUninitialize : false,
    cookie:{maxAge : 100*100*60,httpOnly:true}
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Serevr Is Started",port);
})