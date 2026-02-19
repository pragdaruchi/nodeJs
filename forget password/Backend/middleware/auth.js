const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    let token = req.header("Authorization")

    if (!token) {
        res.json({ "msg": "Token Not Found" })
    }

    let decode = jwt.verify(token, "rnw")
    req.user = decode
    next()
}
module.exports = auth