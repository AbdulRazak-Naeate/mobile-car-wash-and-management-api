const router = require('express').Router();
const mongoose = require('mongoose');
const Booking  = require('../models/Booking');
const {bookingValidation} = require('../validation');
const verify = require('../verifyToken');

router.get('/',async(req,res)=>{

    
 const {error} = bookingValidation(req.body);

 if (error) return res.json({status:400,message:error.details[0].message});
    
    try{
        const booking = await Booking.find();
        res.json({booking:booking});
        
    }catch(err){
        
       console.log(err)
    }
});
router.get('/method/:bookingMethod',async(req,res)=>{

    
    const {error} = bookingValidation(req.body);
   
    if (error) return res.json({status:400,message:error.details[0].message})
       
       try{
           const booking = await Booking.find({bookingMethod:req.params.bookingMethod});
           res.json({booking:booking});
           
       }catch(err){
          console.log(err)
       }
   });
   
router.get('/:bookingId',async(req,res)=> {

    try {
        const booking = await Booking.findOne({_id:req.params.bookingId});
        res.json({booking:booking});

    } catch (error) {
        console.log(error)
    }
});

router.post('/',verify,async (req,res)=>{
   try {
    
       
    const booking = new Booking({
        userId:req.body.userId,
        staffId:req.body.staffId,
        services:req.body.services,
        vehicle:req.body.vehicle,
        date:req.body.date,
        cost:req.body.cost,
        gpsLocationCords:req.body.gpsLocationCords,
        locationName:req.body.locationName,
        status:req.body.status,
        timeOfDay:req.body.timeOfDay,
        bookingMethod:req.body.bookingMethod,
        completeDate:req.body.completeDate
  })

       const savedBooking = await booking.save();
       return res.json({booking:savedBooking,message:'saved successfully'});
   } catch (error) {
       console.log(error)
   }
});

router.delete('/:bookingId',async(req,res)=>{
    try {

        const removeBooking= await Booking.deleteOne({_id:req.params.bookingId});

        res.json(removeBooking)
    } catch (error) {
        
    }
});

router.patch('/:bookingId',async(req,res)=>{
   try {
    var oId= new mongoose.Types.ObjectId(req.params.bookingId);

    const updateBooking = await Booking.findOneAndUpdate(
        {_id:oId},
        {
            $set:{
                status:req.body.status,
            }
        },{new:true,useFindAndModify:false}
        
    );
     return  res.json(updateBooking);
    
   } catch (error) {
       console.log(error)
   }
});

module.exports = router