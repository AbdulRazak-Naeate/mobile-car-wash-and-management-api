const mongoose = require('mongoose');


const ServiceSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true,
   },
   description:{
       type:String,
       required:true,

   },
   cost:{
       type:Number,
       required:true,
       default: 0,
   },
   duration:{
       type:Date,
       required:true,
   }
});

module.exports = mongoose.model('Service',ServiceSchema)