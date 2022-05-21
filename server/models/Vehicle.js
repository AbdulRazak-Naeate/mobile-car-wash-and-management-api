const mongoose = require('mongoose');


const VehicleSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true,
   },
   admissionCost:{
    type:Number,
    required:true,
    default:0
   },
   image:{
       type:Object,
       required:false,
   }
});

module.exports = mongoose.model('Vehicle',VehicleSchema)