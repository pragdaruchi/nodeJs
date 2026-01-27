const schema = require("../model/firstschema")

module.exports.getData = async (req, res) => {
    await schema.find({}).then((data) => {
        res.json({ "data": data })
    })
}
module.exports.postData = async (req, res) => {
    await schema.create(req.body).then((data) => {
        res.json({ "msg": "Data Added Successfully", "data": data })
    })
}
module.exports.loginAdmin = async (req, res) => {
    // console.log(req.body.mail);
    
    // console.log(admin);
    let admin = await schema.findOne({ email: req.body.mail })
    
    if (!admin) {
         res.json({ msg: "User Not Found", auth: false })
    }
    if (admin.password == req.body.password) {
         res.json({ msg: "Login Successful", auth: true })
    } else {
         res.json({ msg: "Field Is Empty", auth: false })
    }
}

module.exports.deleteData = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id).then((data) => {
        res.json({ "msg": "Data Deleted Successfully", "data": data })
    })
}

module.exports.updateData = async (req, res) => {
    await schema.findByIdAndUpdate(req.body._id, req.body).then((data) => {
        res.json({ "msg": "Data Updated Successfully", "data": data })
    })
}