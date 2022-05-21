const express = require('express');
const app  = express();
const mongoose = require('mongoose');

require('dotenv/config');
const dotenv= require('dotenv');

//import routes
const authRoute     = require('./routes/auth');
const servicesRoute = require('./routes/service');
const vehicleRoute  = require('./routes/vehicle');
const bookingRoute  = require('./routes/booking');
const analytics     = require('./routes/analytics');
dotenv.config();

const options={ useNewUrlParser: true ,useUnifiedTopology: true }
const port = process.env.PORT || 5000;
 app.use(express.json({limit:'50mb'}))
mongoose.connect(process.env.DB_COMMUNITY_CON,options)
const db = mongoose.connection
      db.once('open', _ =>{
          console.log('Database connected')
      })
      db.on('error',err =>{
          console.error('connection error : ', err)
      })


    app.use('/api/service',servicesRoute);
    app.use('/api/vehicle',vehicleRoute);
    app.use('/api/booking',bookingRoute);
    app.use('/api/auth',authRoute);


    app.get('/',async(req,res)=>{

     res.send('Mobile Carwash and Management')
    })

app.listen(port,()=> console.log(`Server start listening on ${port}`))