const mongoose=require('mongoose')

const employSchema=new mongoose.Schema({
    id:String,
    name:String,
    email:String,
    department:String,
    employCode:String
})

const employModel=mongoose.model('EmployAdd',employSchema);
module.exports=employModel