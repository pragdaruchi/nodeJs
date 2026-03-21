const Schema = require("../model/firstSchema")
const jwt = require("jsonwebtoken")

module.exports.login = (req, res) => {
    res.render("login")
}

module.exports.loginAdmin = async (req, res) => {
    console.log(req.body);

    let user = await Schema.findOne({ email: req.body.email })

    if (!user) {
        res.redirect("/")
    }

    let token = jwt.sign({ id: user._id }, "rnw")
    console.log(token);

    res.cookie("token", token)

    await Schema.create(req.body).then(() => {
        res.redirect("/Dashboard")
    })
}

module.exports.dashboard = (req, res) => {
    res.render("Dashboard")
}