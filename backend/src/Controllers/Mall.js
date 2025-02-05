const {Router}=require('express')
const mallModel = require('./../Model/mallModel')

const mallRouter = Router();



mallRouter.post('/create',async (req,res)=>{
    const {name,location} = req.body
    const mall = await mallModel.findOne({name:name,location:location})
    if (mall){
        return res.status(400).json({message:"Mall already exists"})
    }
    await mallModel.create({
        name:name,
        location:location
    })
    return res.status(200).json({message:"Record created successfully."})
})

module.exports = mallRouter