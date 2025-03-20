const ErrorHandler = require("../Utils/ErrorHandler");
const userModel = require("../Model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config(
    {path: "../Config/.env"}
);

const auth = async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    else if (req.headers.authorization){
        token = req.headers.authorization
    }
    if(!token){
        return next(new ErrorHandler("Login to access this resource", 401));
    }
    try{
        const decoded = jwt.verify(token, process.env.secret);
        req.user = await userModel.findById(decoded.id);
        console.log(req.user)
        next();
    }catch(err){
        return next(new ErrorHandler("Login to access this resource", 401));
    }
}

module.exports = auth;