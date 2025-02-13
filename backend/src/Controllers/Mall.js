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

mallRouter.get('/malls/:name',async (req,res)=>{
    try{const {name}=req.params;
    const existMall=await mallModel.findOne({name:name});
    if (!existMall){
        res.status(400).json({message:"Mall not found"})
    }
    res.status(200).json({mall:existMall})}catch(err){
        console.log(err)
    }
})

mallRouter.get('/malls',async (req,res)=>{
    try{
        const malls=await mallModel.find();
        res.status(200).json({malls:malls});
    }catch(err){
        console.log(err);
    }
})

mallRouter.put('/update/:mall',async (req,res)=>{
    try{const {mall}=req.params;
    const existMall=await mallModel.findOne({name:mall});
    const {name,location} = req.body;
    if (!existMall){
        res.status(400).json({message:"Mall not found."})
    }
    existMall.name=name;
    existMall.location=location;
    await existMall.save();
    res.status(200).json({mall:existMall})}catch(err){
        console.log(err)
    }
})

mallRouter.delete('/delete/:mall',async (req,res)=>{
    try{
    const {mall}=req.params;
    const existMall=await mallModel.findOne({name:mall});

    if (!existMall){
        res.status(400).json({message:"Mall not found."})
    }
   
    await mallModel.deleteOne(existMall);
    res.status(200).json({message:"Mall Deleted."})
    }
    catch(err){
        console.log(err)
    }
})


module.exports = mallRouter;