const {Schema, model} = require('mongoose')

const MallSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String
    }
},{
    timestamps:true
})

const mallModel = model('Blr_malls',MallSchema)

module.exports=mallModel