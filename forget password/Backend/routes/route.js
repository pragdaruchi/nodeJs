const express = require("express")
const route = express.Router()

const ctl = require("../controller/ctl")

const auth = require("../middleware/auth")

route.post("/register", ctl.register)
route.post("/login", ctl.login)

route.get("/profile",auth,ctl.profile)
route.post("/changepass",auth,ctl.changepass)

route.post("/forgetpass",ctl.forgetpass)
route.post("/verypass",ctl.verypass)
module.exports = route