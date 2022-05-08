const mongoose = require('mongoose');


const VehicleSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true,
   },
   model:{
       type:String,
       required:true,
   },
   image:{
       type:Object,
       required:true,
   }
});

module.exports = mongoose.model('Vehicle',VehicleSchema)