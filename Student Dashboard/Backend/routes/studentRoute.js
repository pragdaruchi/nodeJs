const express = require("express")
const route = express.Router()

const ctl = require("../controller/studentCtl")

route.post("/login",ctl.login)

route.post("/post",ctl.postData)
route.get("/get",ctl.getData)
route.delete("/delete",ctl.deleteData)
route.put("/update",ctl.updateData)

module.exports = route