const express = require("express")
const route = express.Router()

const ctl =  require("../controller/ctl")

const passport = require("../middleware/localst")

route.get("/",ctl.login)
route.post("/Login",passport.authenticate("localst",{failureRedirect : "/"}),ctl.loginAdmin)

route.get("/dashboard",passport.checkAuth,ctl.Dashboard)
route.get("/addAdmin",passport.checkAuth,ctl.addAdmin)

route.get("/viewAddmin",passport.checkAuth,ctl.firstData)
route.post("/addAdmin",passport.checkAuth,ctl.addAdminData)
route.get("/deleteData",passport.checkAuth,ctl.deleteData)
route.get("/editData",passport.checkAuth,ctl.editData)
route.post("/updateData",passport.checkAuth,ctl.updateData)


module.exports = route