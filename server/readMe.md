GET a  Service

url 
http://localhost:5000/api/service/627b8718d100ddc54d64f3ae
{
    "service": {
        "_id": "627b8718d100ddc54d64f3ae",
        "name": "Full body wash",
        "description": "wash whole body",
        "cost": 20,
        "duration": "45",
        "__v": 0
    }
}
PATCH a Service
url 
localhost:5000/api/service/627b8718d100ddc54d64f3ae

Body

 {
     "name": "Full body wash",
     "description": "wash whole body",
     "cost": 20,
     "duration": "45"
 }

response
{
    "_id": "627b8718d100ddc54d64f3ae",
    "name": "Full body wash",
    "description": "wash whole body",
    "cost": 20,
    "duration": "45",
    "__v": 0
}



POST Vehicle
http://localhost:5000/api/vehicle

hearders

Content-Type ='application/json'
auth_token   ='user_token_here'

  body

{
   "name":"PickUp Truck",
  "admissionCost":"50",
   "data":["paste_base64Image_here"]
}
  resposne
{
    "vehicle": {
        "name": "PickUp Truck",
        "admissionCost": 50,
        "image": [
            "https://res.cloudinary.com/abdulrazakneate/image/upload/v1653302840/vehicle/o24zkgayujinbgfq1kzf.jpg"
        ],
        "_id": "628b663827f71b275c03bbae",
        "__v": 0
    },
    "message": "saved successfully"
}


GET specific Vehicle
//url
localhost:5000/api/vehicle/628a198fa74be994adad2e69

//response
{
    "vehicle": [
        {
            "_id": "628a198fa74be994adad2e69",
            "name": "Saloon cars",
            "admissionCost": 30,
            "image": [
                "https://res.cloudinary.com/abdulrazakneate/image/upload/v1653217678/vehicle/pbngemq8wer0el4gcwcm.jpg"
            ],
            "__v": 0
        }

GET Vehicles
localhost:5000/api/vehicle

{
    "vehicle": [
        {
            "_id": "628a198fa74be994adad2e69",
            "name": "Saloon cars",
            "admissionCost": 30,
            "image": [
                "https://res.cloudinary.com/abdulrazakneate/image/upload/v1653217678/vehicle/pbngemq8wer0el4gcwcm.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "628a1a9ce0c81ed0d51a2e8f",
            "name": "PickUp Truck",
            "admissionCost": 50,
            "image": [
                "https://res.cloudinary.com/abdulrazakneate/image/upload/v1653217947/vehicle/i9pacw1ycjwred4psbn8.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "628b53dbbda81a3059c1bfae",
            "name": "PickUp Truck2",
            "admissionCost": 50,
            "image": [],
            "__v": 0
        },
        {
            "_id": "628b663827f71b275c03bbae",
            "name": "PickUp Truck22",
            "admissionCost": 50,
            "image": [
                "https://res.cloudinary.com/abdulrazakneate/image/upload/v1653302840/vehicle/o24zkgayujinbgfq1kzf.jpg"
            ],
            "__v": 0
        }
    ]
}

POST Booking

hearders

Content-Type ='application/json'
auth_token   ='user_token_here'


body

{
             "userId": "eedhjsncjsksgghh4hdsadkjddhfk",
             "staffId":"eedhjsncjsksgghh4hdsadkjddhfk",
            "services": [{"_id":"627b8718d100ddc54d64f3ae",
                           "name":"Full body wash",
                           "description":"wash whole body",
                            "cost":20,
                            "duration":25}],
             "vehicle":{"id":"62837cf5750ce41c736b1744",
                        "name":"Tricycle",
                        "admissionCost":5},
              "date":"09/13/2022",
              "cost":8,
              "gpsLocationCords":{"longitude":"0.4757838393","latitude":"-29932999"},
              "locationName":"Changli",
              "status":"Pending",
              "timeOfDay":"09:00h",
              "bookingMethod":"MOBILE",
              "completeDate":"09/15/2022"
               
              
               
}
response
{
    "booking": {
        "userId": "eedhjsncjsksgghh4hdsadkjddhfk",
        "staffId": "eedhjsncjsksgghh4hdsadkjddhfk",
        "services": [
            {
                "_id": "627b8718d100ddc54d64f3ae",
                "name": "Full body wash",
                "description": "wash whole body",
                "cost": 20,
                "duration": 25
            }
        ],
        "vehicle": {
            "id": "62837cf5750ce41c736b1744",
            "name": "Tricycle",
            "admissionCost": 5
        },
        "date": "2022-09-13T00:00:00.000Z",
        "cost": 8,
        "gpsLocationCords": {
            "longitude": "0.4757838393",
            "latitude": "-29932999"
        },
        "locationName": "Changli",
        "status": "Pending",
        "timeOfDay": "09:00h",
        "bookingMethod": "MOBILE",
        "completeDate": "2022-09-15T00:00:00.000Z",
        "_id": "628b6c8b27f71b275c03bbb2",
        "__v": 0
    },
    "message": "saved successfully"
}

GET Booking by method

/*Options*/ MOBILE ,POS

localhost:5000/api/booking/method/MOBILE   

{
    "booking": [
        {
            "_id": "6284f12b443363578aeb87f6",
            "userId": "eedhjsncjsksgghh4hdsadkjddhfk",
            "services": [
                {
                    "_id": "627b8718d100ddc54d64f3ae",
                    "name": "Full body wash",
                    "description": "wash whole body",
                    "cost": 20,
                    "duration": "45"
                },
                {
                    "_id": "627b8899c325ada5a6d6f965",
                    "name": "Tyres only",
                    "description": "wash front and back tyres",
                    "cost": 20,
                    "duration": "45"
                }
            ],
            "vehicle": {
                "id": "62837cc1750ce41c736b173e",
                "name": "Truck",
                "admissionCost": 12
            },
            "date": "2022-09-13T00:00:00.000Z",
            "cost": 8,
            "gpsLocationCords": {
                "longitude": "0.4757838393",
                "latitude": "-29932999"
            },
            "locationName": "Sabongida",
            "status": "Pending",
            "timeOfDay": "12:00h",
            "completeDate": "2022-09-13T00:00:00.000Z",
            "__v": 0,
            "staffId": "",
            "bookingMethod": "MOBILE"
        },
        {
            "_id": "6284f13c443363578aeb87f8",
            "userId": "eedhjsncjsksgghh4hdsadkjddhfk",
            "services": [
                {
                    "_id": "627b8718d100ddc54d64f3ae",
                    "name": "Full body wash",
                    "description": "wash whole body",
                    "cost": 20,
                    "duration": "45"
                },
                {
                    "_id": "627b8899c325ada5a6d6f965",
                    "name": "Tyres only",
                    "description": "wash front and back tyres",
                    "cost": 20,
                    "duration": "45"
                }
            ],
            "vehicle": {
                "id": "62837cc1750ce41c736b173e",
                "name": "Truck",
                "admissionCost": 12
            },
            "date": "2022-09-13T00:00:00.000Z",
            "cost": 8,
            "gpsLocationCords": {
                "longitude": "0.4757838393",
                "latitude": "-29932999"
            },
            "locationName": "Sabongida",
            "status": "Pending",
            "timeOfDay": "12:00h",
            "completeDate": "2022-09-13T00:00:00.000Z",
            "__v": 0,
            "staffId": "",
            "bookingMethod": "MOBILE"
        },
        {
            "_id": "6284f257443363578aeb87fa",
            "userId": "eedhjsncjsksgghh4hdsadkjddhfk",
            "services": [
                {
                    "_id": "627b890fc325ada5a6d6f96e",
                    "name": "Interior",
                    "description": "wash interior of the vehicle",
                    "cost": 7,
                    "duration": 25
                }
            ],
            "vehicle": {
                "id": "62837cc1750ce41c736b173e",
                "name": "Truck",
                "admissionCost": 12
            },
            "date": "2022-09-13T00:00:00.000Z",
            "cost": 8,
            "gpsLocationCords": {
                "longitude": "0.4757838393",
                "latitude": "-29932999"
            },
            "locationName": "Changli",
            "status": "Pending",
            "timeOfDay": "09:00h",
            "completeDate": "2022-09-15T00:00:00.000Z",
            "__v": 0,
            "bookingMethod": "MOBILE",
            "staffId": ""
        },
        {
            "_id": "62861a6aa91656571020ce45",
            "userId": "eedhjsncjsksgghh4hdsadkjddhfk",
            "staffId": "eedhjsncjsksgghh4hdsadkjddhfk",
            "services": [
                {
                    "_id": "627b8718d100ddc54d64f3ae",
                    "name": "Full body wash",
                    "description": "wash whole body",
                    "cost": 20,
                    "duration": 25
                }
            ],
            "vehicle": {
                "id": "62837cf5750ce41c736b1744",
                "name": "Tricycle",
                "admissionCost": 5
            },
            "date": "2022-09-13T00:00:00.000Z",
            "cost": 8,
            "gpsLocationCords": {
                "longitude": "0.4757838393",
                "latitude": "-29932999"
            },
            "locationName": "Changli",
            "status": "Pending",
            "timeOfDay": "09:00h",
            "bookingMethod": "MOBILE",
            "completeDate": "2022-09-15T00:00:00.000Z",
            "__v": 0
        }
    ]
}