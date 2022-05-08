const router = require('express').Router();
const User   = require('../models/User');
//const mongoose = require('mongoose');

//Get all Users
router.get('/',async(req,res)=>{
    try{
        const users = await User.find();
        res.send({users:users,message:"loaded successfully"})
    }catch(err){
        res.json({message:err})
    }
});

//Get s specific  User
router.get('/:userId',async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.body.userId});
          res.send({user:user})
    }catch(err){
        res.json({message:err})
    }
});