const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "pragdaruchi@gmail.com",
        pass: "dxvzralhikctahva"
    }
})

module.exports.sendOtp = (email, otp) => {
    let mailoptions = {
        to: email,
        from: "pragdaruchi@gmail.com",
        subject: "Password Your Reset",
        text: `email with send otp ${otp}`
    }
    transport.sendMail(mailoptions)
}