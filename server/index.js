const express = require('express');
const app  = express();
const port = process.env.PORT || 5000;
 
app.get('/',(req,res)=>{
    res.send('Mobile Carwash and Management')
})

app.listen(port,()=> console.log(`Server start listening on ${port}`))