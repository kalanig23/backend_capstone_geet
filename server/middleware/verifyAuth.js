const jwt = require("jsonwebtoken");
const env = require('dotenv');
env.config();

const verifyAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).send('Access Denied');
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decode.userId;
        next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
}

module.exports = { verifyAuth };
