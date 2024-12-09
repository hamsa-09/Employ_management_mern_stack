const crypto=require('crypto')
const employModel =require('../models/EmployModel')

exports.getAllEmployee=async(req,res,next)=>{
        
          try{
            const employees= await employModel.find({});
            res.status(200).json(employees)
          }
          catch(error){
           res.status(500).json({message:error.message})
          }
}
exports.getEmployee=async(req,res,next)=>{
    try{
            const employee=await employModel.findOne({employCode:req.params.employCode});
          
            if(!employee){
                return res.status(400).json("Employee doesn't exit")
            }
            res.status(200).json(employee)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}


exports.createEmployee=async(req,res,next)=>{
    try{
        const  {id,name,email,department}=req.body;
        const employCode=crypto.randomBytes(4).toString("hex");
         const newEmploy=await employModel.create({id,name,email,department,employCode})
         res.status(201).json(newEmploy)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}



exports.updateEmployee=async(req,res,next)=>{
   try{
        const employee=await employModel.findOneAndUpdate({employCode:req.params.employCode},req.body,{new:true})
        if(!employee){
            return res.status(400).json("Employee doesn't exit")
        }
        res.status(200).json(employee)
   }
   catch(error){
    res.status(500).json(error.message)
   }
}




exports.deleteEmployee=async(req,res,next)=>{
    try{
        const deleteEmployee=await employModel.findOneAndDelete({employCode:req.params.employCode})
        if(!deleteEmployee){
            return res.status(400).json("Employee doesn't exit")
        }
        return res.status(200).json("Successfully deleted")
    }
    catch{
        res.status(500).json(error.message)
    }
}