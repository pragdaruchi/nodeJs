const express = require("express")
const route = express.Router()

const ctl = require("../controller/ctl")

route.get("/", ctl.register)
route.post("/register", ctl.registerform)

route.get("/login", ctl.login)
route.post("/login",ctl.loginAdmin)

route.get("/logout",ctl.logout)

route.get("/Dashboard",ctl.dashboard)

module.exports = route