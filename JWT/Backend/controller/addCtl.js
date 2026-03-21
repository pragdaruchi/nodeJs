const Schema = require("../model/schema")

module.exports.add = (req, res) => {
    res.render("add")
}
module.exports.view = (req, res) => {
    res.render("view")
}

module.exports.getData = async (req, res) => {
    let data = await Schema.find({})
    res.render("add", { data })
}

module.exports.postData = async (req, res) => {
    await Schema.create(req.body)
    res.redirect("/manager/view")
}
