const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {

    let token = req.cookies.token 

    if (!token) {
        return res.redirect("/")
    }

    let decode = jwt.verify(token, "rnw")

    req.user = decode
    next()
}

module.exports = auth