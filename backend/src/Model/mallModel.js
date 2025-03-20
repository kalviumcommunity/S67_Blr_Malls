const {Schema, model, default: mongoose} = require('mongoose')

const MallSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
},{
    timestamps:true
})

const mallModel = model('Blr_malls',MallSchema)

module.exports=mallModel