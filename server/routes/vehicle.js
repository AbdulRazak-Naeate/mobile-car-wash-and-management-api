const router = require('express').Router();
const Vehicle = require('../models/Vehicle');
const verify  = require('../verifyToken');
const mongoose = require('mongoose');
const { cloudinary } = require('../cloudinary');
router.get('/',async(req,res)=>{


    try{

        const vehicle = await Vehicle.find();
        res.json({vehicle:vehicle});
        
    }catch(err){
       console.log(err);
    }
});

router.get('/:vehicleId',async(req,res)=>{

    try {
        const vehicle = await Vehicle.findOne({_id:req.params.vehicleId});
        res.json({vehicle:vehicle});

    } catch (error) {
        console.log(error)
    }
});

router.post('/',verify,async (req,res)=>{
   try {
       const vehicleExist = await Vehicle.findOne({name:req.body.name})

       if  (vehicleExist) return res.json({status:400,message:"vehicle allready taken"})
       var imageUrls=[];
       var base64encImages=req.body.data

       console.log(req.body.data)
       try {
            for(let i=0;i<base64encImages.length;i++){
               const fileStr  = base64encImages[i];
               const uploadResponse = await cloudinary.uploader.upload(fileStr, {
                   upload_preset: 'vehicle',
               });
               console.log(uploadResponse);
               imageUrls.push(uploadResponse.secure_url)
            }     
         // res.json({ msg: 'success',urls:imageUrls });
   
       } catch (err) {
           console.error(err);
         return  res.status(500).json({ err: 'Something went wrong' });
       }
   
    const vehicle = new Vehicle({
        name:req.body.name,
       /*vehicleType:req.body.vehicleType, */
        admissionCost:req.body.admissionCost,
        image:imageUrls
  })

       const savedVehicle = await vehicle.save();
       return res.json({vehicle:savedVehicle,message:'saved successfully'});
   } catch (error) {
       console.log(error)
   }
});

router.delete('/:vehicleId',async(req,res)=>{
    try {

        const removevehicle= await Vehicle.deleteOne({_id:req.params.vehicleId});

        res.json(removevehicle)
    } catch (error) {
        
    }
});

router.patch('/:vehicleId',async(req,res)=>{
   try {
    var oId= new mongoose.Types.ObjectId(req.params.vehicleId);

    const updatevehicle = await Vehicle.findOneAndUpdate(
        {_id:oId},
        {
            $set:{
                name:req.body.name,
              /*   model:req.body.vehicleModel,
                vehicleType:req.body.vehicleType, */
                admissionCost:req.body.admissionCost,   
            }
        },{new:true,useFindAndModify:false}
        
    );
     return  res.json(updatevehicle);
    
   } catch (error) {
       console.log(error)
   }
});

module.exports = router