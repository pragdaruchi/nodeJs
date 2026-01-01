const express = require("express")
const port = 1002

const app = express()

const db = require("./config/db")
const Schema = require("./model/firstSchema")

app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/",async(req,res)=>{
    let data = await Schema.find({})
    res.render("index",{data})
})

app.post("/appData" , async(req,res)=>{
    await Schema.create(req.body).then((body)=>{
        res.redirect("/")
    })
})

app.get("/deleteData",async(req,res)=>{
    await Schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
})

app.get("/editData",async(req,res)=>{
  let singleData =  await Schema.findById(req.query.id)
    res.render("edit",{singleData})
})

app.post("/updateData",async(req,res)=>{
    await Schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
})
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Is Started" , port);
})