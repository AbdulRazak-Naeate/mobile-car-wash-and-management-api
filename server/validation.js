const Joi = require('@hapi/joi');

//Model vlaidtions

const registerValidation = data =>{
    const schema = Joi.object({
      username:Joi.string().min(6),
      firstname:Joi.string(),
      lastname:Joi.string(),
      email:Joi.string().email(),
      role:Joi.string(),
      phone:Joi.string(),
      address:Joi.any(),
      fromGoogle:Joi.boolean(),
      password:Joi.string().min(6).required(),
      confirmed:Joi.string(),
      image:Joi.any()
     });
     
     return   schema.validate(data);
     
  };
  
  const loginValidation = data =>{
      const schema = Joi.object({
        email:Joi.string().min(6).required(),
        password:Joi.string().min(6).required()
       });
    
       return   schema.validate(data);
       
    };

const bookingValidation = data =>{
    const schema = Joi.object({
        userId:Joi.string(),
        staffId:Joi.string(),
        services:Joi.array(),
        vehicle:Joi.any(),
        cost:Joi.number(),
        gpsLocationCords:Joi.object(),
        locationName:Joi.string(),
        status:Joi.string(),
        timeOfDay:Joi.string(),
        bookingMethod:Joi.string(),
        completeDate:Joi.string()
    });

    return schema.validate(data);
}

const serviceValidation = data =>{

   const schema =Joi.object({
        name:Joi.string(),
        description:Joi.string(),
        cost:Joi.number(),
        duration:Joi.string()
   });
   return schema.validate(data)
}
const vehicleValidation = data =>{
    
    const schema =Joi.object({
         name:Joi.string(),
         admissionCost:Joi.number(),
         image:Joi.any()
    });
    
    return schema.validate(data)
 }
module.exports.loginValidation    = loginValidation;
module.exports.registerValidation = registerValidation;
module.exports.bookingValidation  = bookingValidation;
module.exports.serviceValidation  = serviceValidation;
