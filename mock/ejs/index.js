const express = require("express")

const port = 1002

const app = express()

app.set("view engine", "ejs")


const db = require("./config/db")
const Schema = require("./model/firstSchema")
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
    let data = await Schema.find({})
    res.render("add", { data })
})

app.post("/appData", async (req, res) => {
    await Schema.create(req.body)
    res.redirect("/")
})

app.get("/deleteData", async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id)
    res.redirect("/")
})

app.get("/editData", async (req, res) => {
    let singleData = await Schema.findById(req.query.id)
    res.render("view", { singleData })
})

app.post("/updateData", async (req, res) => {
    await Schema.findByIdAndUpdate(req.body.id, req.body)
    res.redirect("/")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server IS Started", port);
})