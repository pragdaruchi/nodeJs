const express = require("express")
const route = express.Router()
const ctl = require("../controller/addCtl")

route.get("/add", ctl.add)

route.get("/view", ctl.view)

route.get("/view", ctl.getData)
route.post("/add", ctl.postData)


module.exports = route