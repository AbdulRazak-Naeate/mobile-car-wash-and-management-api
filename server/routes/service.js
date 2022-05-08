const router = require('express').Router();
const Service = require('../models/Service');


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

router.post('/',(req,res)=>{
   try {
       const serviceExist = await Service.findOne({name:req.body.name})
       if (serviceExist) return res.json({status:400,message:"Serive allready taken"})
       
    const service = new Service({
        name:req.body.name,
        description:req.body.description,
        cost:req.body.cost,
        duration:req.body.duration

  })

   const saveSerivce = await service.Save();
   res.send({service:saveSerivce,message:'saved successfully'});
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
    var oId= new mongoose.Types.ObjectId(req.params.productId);

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
})