const jwt = require("jsonwebtoken");

/**
 * @description this checks if the user is authorized and assign user to register
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next
 */

const authorizeUser = (req,res,next) => {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];
    if(!token) return res.status(401).send("Missing token");
    jwt.verify(token,process.env.SECRET_KEY,(err,user) => {
        if(err){
            return res.status(401).send("Invalid token");
        }
        req.user = user;
        next();
    });
};

module.exports = {authorizeUser};