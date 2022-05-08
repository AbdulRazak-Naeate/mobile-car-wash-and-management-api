const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
   userId:{
       type:String,
       required:true,
    },
    services:{
        type:Array,
        default:['','',''],
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
     },
     cost:{
         type:Number,
         default:0,
     },
     gpsLocationCords:{
        type:Object,
        default:{
            latitude:'0.003883',
            longitude:'4.33282',
            altitude:'0.0002'
        }
     },
     locationName:{
         type:String,

     },
     status:{
         type:String,
         default:'pending'
     },
     timeOfDay:{
         type:String,
         required:true
     },
     completeDate:{
         type:Date,
         
     }
});

module.exports = mongoose.model('Booking',BookingSchema);