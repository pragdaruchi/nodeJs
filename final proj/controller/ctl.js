const Schema = require("../model/firstSchema")

module.exports.register = (req, res) => {
    res.render("Register")
}

module.exports.registerform = async (req, res) => {
    await Schema.create(req.body)
    res.redirect("/login")
}
module.exports.login = (req, res) => {
    res.render("Login")
}

module.exports.loginAdmin = async (req, res) => {
    let admin = await Schema.findOne({ email: req.body.email })
    if (!admin) {
        res.redirect("/login")
    }
    if (admin.password == req.body.password) {
        res.cookie("admin", admin)
        res.redirect("/dashboard")
    } else {
        res.redirect("/login")
    }
}

module.exports.logout = (req, res) => {
    res.redirect("/login")
}

module.exports.dashboard = async (req, res) => {
    res.render("Dashboard")
}