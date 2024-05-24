const User = require('../model/userModel');

const Users = User.model;

exports.createUser = async(req,res)=>{
    try{
        const userData = new Users(req.body)
        await userData.save()
        console.log(userData)
        res.status(200).json({message: "user create successfully"})

    }catch(error){
        res.status(500).json({error: error})
    }
}

exports.getUsers =  async(req, res)=> {
    try{
        const userData = await Users.find();
        res.status(200).json({message:"get all data successfully",userData})
    }catch(error){
        res.status(500).json({error:error})
    }
   
}

exports.getUser =  async(req, res)=> {
    const id = req.params.id;
    try{
        const userData = await Users.findById(id);
        res.status(200).json({message:"get one data successfully",userData})
    }catch(error){
        res.status(500).json({error:error})
    }
   
}

exports.updateUser =  async(req, res)=> {
    const id = req.params.id;
    try{
        const userData = await Users.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({message:"data update successfully",userData})
    }catch(error){
        res.status(500).json({error:error})
    }
}

exports.deleteUser =  async(req, res)=> {
    const id = req.params.id;
    try{
        const userData = await Users.findByIdAndDelete(id);
        res.status(200).json({message:"data delete successfully",userData})
    }catch(error){
        res.status(500).json({error:error})
    }
}