const {Router}= require("express");
const userModel = require("../Model/userModel");
const {upload} = require("../../multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const auth = require("../Middleware/Auth");
require("dotenv").config(
    {
        path: path.resolve(__dirname, "../Config/.env")
    }
);

const secret = process.env.secret;

const userRouter = Router();


userRouter.post("/create-user",upload.single("avatar"), async(req,res,next)=>{
    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email:email});
    if (userEmail) {
        return res.status(400).json({error: "User already exists"});
      }
      if (!req.file) {
        return res.status(400).json({ error: "Avatar upload failed" });
      }
      
    const filename = req.file.filename ;
    const fileUrl = `/uploads/${filename}`;
    bcrypt.hash(password, 10, async (err, hash)=>{
        await userModel.create({
                name:name,
                email:email,
                password:hash,
                avatar: {
                    url:fileUrl,
                    public_id:filename
                },
            
        })
        console.log(hash);
        return res.status(200).json({message: "User created"});
    })
    


});

userRouter.post("/login", async(req,res)=>{
    try{
        const {email, password} = req.body;
    const user = await userModel.findOne({email:email});
    if(!user){
        return next(new ErrorHandler("User not found", 400));
    }
    const isMatch=await bcrypt.compare(password, user.password) 
        
    if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }  
    const token=jwt.sign({id:user._id}, secret)
    console.log(token)
    res.setHeader("Authorization", `Bearer ${token}`);
    return res.status(200).json({ token: `Bearer ${token}`});
    }
    catch(err){
        console.error("Login error:", err.message, err.stack);
        return res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = userRouter;