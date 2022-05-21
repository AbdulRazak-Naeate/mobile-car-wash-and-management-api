const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
   userId:{
       type:String,
       required:true,
    },
    staffId:{
        type:String,
        required:false,
     },
    services:{
        type:Array,
        default:['','',''],
        required:true,
    },
    vehicle:{
        type:Object,
        required:true,
        default:{
            name:'vehicle',
            admissionCost:15
        }
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
         required:false
     },
     bookingMethod:{
      type:String,  /* values( POS ,MOBILE) */
      
     },
     completeDate:{
         type:Date,  
     }
});

module.exports = mongoose.model('Booking',BookingSchema);