const mongoose = require("mongoose")

const stdSchema = new mongoose.Schema(
    {
       name:
       {
        type:String,
        required:true
       },
       email:
       {
        type:String,
        required:true
       },
       mobile:
       {
        type:String,
        required:true
       },
       city:
       {
        type:String,
        required:true
       }
    }
)

module.exports=mongoose.model("stdSchema",stdSchema)