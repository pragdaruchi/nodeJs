const Schema = require("../model/firstSchema")
const bcrypt = require("bcryptjs")
const moment = require("moment")
const jwt = require("jsonwebtoken")
const mailer = require("../middleware/mailer")

module.exports.register = async (req, res) => {
    console.log(req.body);

    let user = await Schema.findOne({ email: req.body.email })
    if (user) {
        return res.json({ "msg": "User already exits" })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10)
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');

    await Schema.create(req.body).then((data) => {
        return res.json({ "msg": "Data Added Successfully", "data": data })
    })
}

module.exports.login = async (req, res) => {
    console.log(req.body);

    let user = await Schema.findOne({ email: req.body.email })

    if (!user) {
        return res.json({ "msg": "User Not Found" })
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
        let token = jwt.sign({ user: user }, "rnw", { expiresIn: "1h" })
        return res.json({ "msg": "Loggin Successfully", user: user, token: token })
    }
    else {
        return res.json({ "msg": "Password Is Wrong" })
    }
}

module.exports.profile = (req, res) => {
    return res.json({ profile: req.user })
}

module.exports.changepass = async (req, res) => {
    console.log(req.body);
    console.log(req.user.user);

    let user = req.user.user

    if (await bcrypt.compare(req.body.oldpass, user.password)) {
        let newPassword = await bcrypt.hash(req.body.newpass, 10)
        await Schema.findByIdAndUpdate(user._id, { password: newPassword }).then(() => {
            return res.json({ "msg": "Password Changes Successfully" })
        })
    }
    else {
        return res.json({ "msg": "Password Is Wrong" })
    }
}

module.exports.forgetpass = async (req, res) => {
    console.log(req.body);

    let user = await Schema.findOne({ email: req.body.email })

    if (!user) {
        return res.json({ "msg": "user Not Found" })
    }

    let otp = Math.floor(Math.random() * 10000 + 900000)
    console.log(otp);
    mailer.sendOtp(req.body.email, otp)

    req.session.otp = otp
    req.session.userID = user._id

    return res.json({ msg: "OTP Send Successfully" })
}

module.exports.verypass = async (req, res) => {
    console.log(req.body);
    console.log(req.session.otp);
    console.log(req.session.userID);

    let otp = req.session.otp
    let userID = req.session.userID

    if (otp == req.body.otp) {
        let newPassword = await bcrypt.hash(req.body.newpass, 10)
        await Schema.findByIdAndUpdate(userID, { password: newPassword }).then(() => {
            res.json({ "msg": "Password Updated Successfully", auth: true })
        })
    }
    else {
        res.json({ "msg": "OTP Is Wrong" })
    }

}