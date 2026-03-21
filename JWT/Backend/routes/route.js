const express = require("express")
const route = express.Router()

const ctl = require("../controller/ctl")

const auth = require("../middleware/auth")

route.get("/", ctl.login)
route.post("/login", ctl.loginAdmin)

route.get("/Dashboard",auth, ctl.dashboard)

module.exports = route