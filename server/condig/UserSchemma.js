const mongoose=require("mongoose");

const userSchemma=new mongoose.Schema({
    username:{
        type:String,
    },
    codeExecuted:{
        language:{
            type:String,
            requiredL:true,
        },
        code:{
            type:String,
            required:true
        }
    },
    email:{
        type:String,
    }
}) 

module.exports=mongoose.model('UserSchemma',userSchemma)