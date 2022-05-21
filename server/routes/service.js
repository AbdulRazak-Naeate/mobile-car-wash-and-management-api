const router = require('express').Router();
const Service = require('../models/Service');
const verify = require('../verifyToken');
const { cloudinary } = require('../cloudinary');
const mongoose = require('mongoose');



//upload image
router.post('/uploadimage', async(req,res)=>{
    var imageUrls=[];
    var base64encImages=req.body.data
    try {
         for(let i=0;i<base64encImages.length;i++){
            const fileStr  = base64encImages[i];
            const uploadResponse = await cloudinary.uploader.upload(fileStr, {
                upload_preset: 'products',
            });
            console.log(uploadResponse);
            imageUrls.push(uploadResponse.secure_url)
         }     
       res.json({ msg: 'yaya',urls:imageUrls });

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }


    
 });
router.get('/',async(req,res)=>{
    try{

        const service= await Service.find();
        res.send({service:service});

    }catch(err){
       console.log(err)
    }
});

router.get('/:serviceId',async(req,res)=>{

    try {
        const service = await Service.findOne({_id:req.params.serviceId});
        res.send({service:service});

    } catch (error) {
        console.log(error)
    }
});

router.post('/',verify,async (req,res)=>{
   try {
       const serviceExist = await Service.findOne({name:req.body.name})
       if (serviceExist) return res.json({status:400,message:"Service allready taken"})
       
       const service = new Service({
        name:req.body.name,
        description:req.body.description,
        cost:req.body.cost,
        duration:req.body.duration

  })

   const savedSerivce = await service.save();
   res.send({service:savedSerivce,message:'saved successfully'});
   } catch (error) {
       console.log(error)
   }
});

router.delete('/:serviceId',async(req,res)=>{
    try {

        const removeService= await Service.deleteOne({_id:req.params.serviceId});

        res.json(removeService)
    } catch (error) {
        
    }
});

router.patch('/:serviceId',async(req,res)=>{
   try {
    var oId= new mongoose.Types.ObjectId(req.params.serviceId);

    const updateService = await Service.findOneAndUpdate(
        {_id:oId},
        {
            $set:{
                name:req.body.name,
                description:req.body.description,
                cost:req.body.cost,
                duration:req.body.duration
            }
        },{new:true,useFindAndModify:false}
        
    );
    res.json(updateService);
    
   } catch (error) {
       console.log(error)
   }
});

module.exports = router