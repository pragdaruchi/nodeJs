const Schema = require("../model/taskSchema")

module.exports.addAdmin = (req, res) => {

    if (req.cookies.admin) {
        res.render("AddAdmin")
    }
    else {
        res.redirect("/login")
    }
}

module.exports.firstData = async (req, res) => {
    if (req.cookies.admin) {
        let data = await Schema.find({})
        res.render("ViewAdmin", { data })
    }
    else {
        res.redirect("/login")
    }
}

module.exports.addAdminData = async (req, res) => {
    if (req.cookies.admin) {
        await Schema.create(req.body)
        res.redirect("/task/ViewAdmin")
    }
    else {
        res.redirect("/login")
    }
}

module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id)
    res.redirect("/task/ViewAdmin")
}

module.exports.editData = async (req, res) => {
    if (req.cookies.admin) {
        let singleData = await Schema.findById(req.query.id)
        res.render("EditAdmin", { singleData })
    }
    else {
        res.redirect("/login")
    }
}

module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.body.id, req.body)
    res.redirect("/task/ViewAdmin")
}