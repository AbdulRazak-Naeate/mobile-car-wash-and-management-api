const express = require('express');
const router  = express.Router();
const Booking = require('../models/Booking')
//get transactions

router.get('/transactions', async (req,res)=>{
  // const analytics =[]

    const transactions = await Booking.find();
    //get Completed Bookings = sales 
    const completedAggr = await Booking.aggregate([{$match:{status:'Completed'}},{$unwind:'$cost'},
    {
        $group:{
            _id:'0',
            count:{$sum:1},
            total:{$sum:'$cost'}
        }
    }
]);

//Current Bookings or imcompleted transactiond
const inCompletedAggr = await Booking.aggregate([{$match:{$or:[{status:'Pending'},{status:'Processing'}]}},{$unwind:'$cost'},
    {
        $group:{
            _id:'0',
            count:{$sum:1},
            total:{$sum:'$cost'}
        }
    }
]);


const alltimeAggr = await Booking.aggregate([{$unwind:'$cost'},
{
    $group:{
        _id:'0',
        count:{$sum:1},
        total:{$sum:'$cost'}
    }
}
]);
    
     
    res.json({transactions:transactions,completedAggregate:completedAggr,inCompleteAggregate:inCompletedAggr,alltimeAggregate:alltimeAggr,message:'transactions loaded'});

});



router.post('/transactions/service/sales/monthly/:serviceId',async (req,res)=>{

    var months =[{label:'jan',num:1},{label:'feb',num:2},{label:'mar',num:3},{label:'apr',num:4},
                   {label:'may',num:5},{label:'jun',num:6},{label:'jul',num:7},{label:'aug',num:8},
                   {label:'sep',num:9},{label:'oct',num:10},{label:'nov',num:11},{label:'dec',num:12}];
    var year =req.body.year ;
    var total=0;            
    const data=[];
     for(var i = 0;i < months.length;i++){
         //var m=months[i].num;         
                   
         var m=months[i].num;
         var label=months[i].label;
         var serviceid=req.params.serviceId
        const transMonthly = await Booking.aggregate(
            [
                {
                $match:{serviceId:serviceid}
                },
           {
               $match:{status:"Completed"}
           },

            {
                $match:{$expr:{
                     $eq:[{$year: "$date"},year]
                  }}
            },
             {
                 $redact:{ 
                 $cond:[
                     { $eq:[{$month:'$date'},m]},
                     "$$KEEP","$$PRUNE"
                 ]
                }
              },{
            $group:{
                _id:'0',
                count:{$sum:1},
                sales:{$sum:'$cost'}
            }
        }
        ]);
        if (transMonthly.length>0){
            data.push({name:label,"Monthly Sales":transMonthly[0].sales});
            total+=transMonthly[0].sales;
            
        }else{
            data.push({name:label,"Monthly Sales":0});

        }
     }
   
     res.json({monthlySales:data,totalSales:total})
})

router.get('/transactions/sales/monthly',async (req,res)=>{
   
     
    var months =[
        {label:'jan',num:1},{label:'feb',num:2},{label:'mar',num:3},
        {label:'apr',num:4},{label:'may',num:5},{label:'jun',num:6},{label:'jul',num:7},{label:'aug',num:8},
                   {label:'sep',num:9},{label:'oct',num:10},{label:'nov',num:11},{label:'dec',num:12}];
    var year =req.body.year ;
    var total=0;            
    const data=[];
     for(var i = 0;i < months.length;i++){
         //var m=months[i].num;         
                   
         var m=months[i].num;
         var label=months[i].label;
         console.log(label)
        const transMonthly = await Booking.aggregate(
            [
           {
               $match:{status:"Completed"}
           },

            {
                $match:{$expr:{
                     $eq:[{$year: "$date"},year]
                  }}
            },
             {
                 $redact:{ 
                 $cond:[
                     { $eq:[{$month:'$date'},m]},
                     "$$KEEP","$$PRUNE"
                 ]
                }
              },{
            $group:{
                _id:'0',
                count:{$sum:1},
                sales:{$sum:'$cost'}
            }
        }
        ]);
        if (transMonthly.length>0){
            data.push({name:label,"Monthly Sales":transMonthly[0].sales});
            total+=transMonthly[0].sales;
            
        }else{
            data.push({name:label,"Monthly Sales":0});

        }
     }
   
     res.json({monthlySales:data,totalSales:total})
})

 //get sales withen a month 
 //!Note ,you need to specify year also

router.get('/transactions/sales/:month/:year', async (req,res)=>{


                   

        const transMonthly = await Booking.find({
            $expr: {
                    $and: [
                        {
                          "$eq": [
                            {
                             "$month": "$date"
                           },
                            2 //speify month
                       ]
                     },
                     {
                       "$eq": [
                           {
                         "$year": "$date"
                          },
                          2022 //specify year
                         ]
                       }
                    ]
                   }});
        
     
   
     res.json({transMonthly})
})

module.exports = router;