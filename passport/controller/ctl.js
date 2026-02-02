const Schema = require("../model/firstSchema")

module.exports.Dashboard = (req, res) => {
    res.render("Dashboard")
}
module.exports.addAdmin = (req, res) => {
    res.render("addAdmin")
}

module.exports.firstData = async (req, res) => {
    let data = await Schema.find({})
    res.render("viewAddmin", { data })
}

module.exports.addAdminData = async (req, res) => {
    await Schema.create(req.body)
    res.redirect("viewAddmin")
}

module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id)
    res.redirect("/viewAddmin")
}

module.exports.editData = async (req, res) => {
    let singleData = await Schema.findById(req.query.id)
    res.render("editAdmin", { singleData })
}

module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.body.id, req.body)
    res.redirect("/viewAddmin")
}

module.exports.login = (req,res)=>{
    res.render("Login")
}

module.exports.loginAdmin = (req,res)=>{
    res.redirect("/Dashboard")
}