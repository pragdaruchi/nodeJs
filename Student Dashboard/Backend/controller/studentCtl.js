const Schema = require("../model/secondSchema")

module.exports.postData = async (req, res) => {
    await Schema.create(req.body).then((data) => {
        res.json({ "msg": "Data Added Successfully", "data": data })
    })
}

module.exports.getData = async (req, res) => {
    await Schema.find({}).then((data) => {
        res.json({ "data": data })
    })
}

module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id).then((data) => {
        res.json({ "msg": "Data Deleted Successfully", "data": data })
    })
}
module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.body._id, req.body).then((data) => {
        res.json({ "msg": "Data Updated Successfully", "data": data })
    })
}

module.exports.login = async (req, res) => {
    let admin = await Schema.findOne({ classname: req.body.classname })

    if (!admin) {
        return res.json({ "msg": "Student Not Registered", auth: false })
    }

    if (admin.rollno == req.body.rollno) {
        res.cookie("student", admin)
        return res.json({ "msg": "Login Successfully", auth: true })
    }
    else {
        return res.json({ "msg": "Field Is Empty", auth: false })
    }
}