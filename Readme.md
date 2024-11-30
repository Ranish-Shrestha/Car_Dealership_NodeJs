# Car Dealership

### Installation

```sh
npm install express mongoose body-parser dotenv
```
### APIS
- GET: http://localhost:3000/vehicles
 _Response Body_:
 ```sh
  [
    {
        "_id": "674a45746d7705f338875029",
        "make": "BMW 3 Series",
        "model": "3 Series",
        "year": 2007,
        "color": "silver",
        "kms": 30000,
        "vin": "0987654321",
        "price": 12000,
        "images": [
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-front.png?fit=around%7C875:492",
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-rear.png?fit=around%7C875:492",
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-wheel-cap.png?fit=around%7C875:492",
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-front-view.png?fit=around%7C875:492"
        ],
        "__v": 0
    }
]
```
- POST: http://localhost:3000/vehicles
_Request_:
```sh
{
    "make": "BMW 3 Series", 
    "model": "3 Series", 
    "year": "2005", 
    "color": "silver", 
    "kms": "30000", 
    "vin": "0987654321", 
    "price":"12000",
    "images": [
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-front.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-rear.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-wheel-cap.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-front-view.png?fit=around%7C875:492"
    ]       
}
```

_Response Body_:
```sh
{
    "make": "BMW 3 Series",
    "model": "3 Series",
    "year": 2005,
    "color": "silver",
    "kms": 30000,
    "vin": "0987654321",
    "price": 12000,
    "images": [
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-front.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-rear.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-wheel-cap.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-front-view.png?fit=around%7C875:492"
    ],
    "_id": "674a45746d7705f338875029",
    "__v": 0
}
```
- PUT: http://localhost:3000/vehicles/:id
_Request_:
```sh
{
    "make": "BMW 3 Series", 
    "model": "3 Series", 
    "year": "2007", 
    "color": "red", 
    "kms": "31000", 
    "vin": "0987654321", 
    "price":"12000",
    "images": [
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-front.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-rear.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-wheel-cap.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-front-view.png?fit=around%7C875:492"
    ]       
}
```

_Response Body_:
```sh
{
    "make": "BMW 3 Series",
    "model": "3 Series",
    "year": 2007,
    "color": "red",
    "kms": 31000,
    "vin": "0987654321",
    "price": 12000,
    "images": [
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-front.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-rear.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-wheel-cap.png?fit=around%7C875:492",
        "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-front-view.png?fit=around%7C875:492"
    ],
    "_id": "674a45746d7705f338875029",
    "__v": 0
}
```
- GET: http://localhost:3000/vehicles/:id
_Response Body_:
```sh
{
        "_id": "674a45746d7705f338875029",
        "make": "BMW 3 Series",
        "model": "3 Series",
        "year": 2007,
        "color": "silver",
        "kms": 30000,
        "vin": "0987654321",
        "price": 12000,
        "images": [
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-front.png?fit=around%7C875:492",
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-rear.png?fit=around%7C875:492",
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-wheel-cap.png?fit=around%7C875:492",
            "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-front-view.png?fit=around%7C875:492"
        ],
        "__v": 0
    }
```
- DELETE: http://localhost:3000/vehicles/:id
_Response Body_:
```sh
  {
    "message": "Vehicle deleted"
}
```
