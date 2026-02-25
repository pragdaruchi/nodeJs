const express = require("express")
const route = express.Router()

const ctl = require("../controller/TaskCtl")

route.get("/AddAdmin",ctl.addAdmin)

route.get("/ViewAdmin",ctl.firstData)
route.post("/addAdmin",ctl.addAdminData)
route.get("/deleteData", ctl.deleteData)
route.get("/editData",ctl.editData)
route.post("/updateData",ctl.updateData)

module.exports = route