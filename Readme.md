1. Project Overview
This project aims to develop a web service for a car dealership, enabling clients to:
•	View a list of cars available in stock.
•	Filter vehicles based on price or kilometers (KMs).
•	View vehicle details, including abstract and full information.

The project has two primary components:
a)	Back-End: RESTful web services using Node.js and MongoDB.
b)	Front-End: A user-friendly interface using HTML, CSS, and JavaScript.

2. Technologies Used
•	Back-End: Node.js, Express.js
•	Database: MongoDB
•	Front-End: HTML5, CSS3, JavaScript
•	Tools: npm, Postman, MongoDB Compass
•	Web Services: RESTful API with JSON responses

3. System Design
The system comprises the following components:
Client-Side:
•	Displays 16 vehicles per page in a 4x4 grid.
•	Filter functionality (by price or KMs).
•	Links to view full vehicle information on a new page.
Server-Side:
•	Handles API requests (CRUD operations).
•	Connects to the MongoDB database to fetch/store vehicle data.
Database:
•	Stores vehicle details such as make, model, year, color, kilometers, VIN, price, and images.

4. Setup and Installation
Clone the Repository:
git clone <https://github.com/Ranish-Shrestha/Car_Dealership_NodeJs.git>
Install Dependencies: 
Ensure Node.js is installed, then run:
npm install express mongoose body-parser dotenv
Setup MongoDB:
•	Install MongoDB and start the server.
•	Create a database named CarsDB
•	Add a vehicles collection.
Start the Server: Create a .env file to define your MongoDB connection string:
MONGODB_URI=mongodb://localhost:27017/carDealership
PORT=3000
Run the server:
node server.js
The server will run at http://localhost:3000.

5. APIs and Functionalities
The following APIs handle the back-end operations:
1. Get All Vehicles
•	Method: GET
•	Endpoint: /vehicles
•	Description: Retrieves a list of all vehicles.
•	Response Example:
  {
    "_id": "674a45746d7705f338875029",
    "make": "BMW",
    "model": "3 Series",
    "year": 2007,
    "color": "Silver",
    "kms": 30000,
    "vin": "0987654321",
    "price": 12000,
    "images": ["<image-url1>", "<image-url2>"]
  }
2. Create a Vehicle
•	Method: POST
•	Endpoint: /vehicles
•	Request Body Example:
{
  "make": "BMW",
  "model": "3 Series",
  "year": 2005,
  "color": "Silver",
  "kms": 30000,
  "vin": "0987654321",
  "price": 12000,
  "images": ["<image-url1>", "<image-url2>"]
}
•	Response: Returns the created vehicle object.
3. Get Vehicle by ID
•	Method: GET
•	Endpoint: /vehicles/:id
•	Response: Returns details of a specific vehicle.
4. Update a Vehicle
•	Method: PUT
•	Endpoint: /vehicles/:id
•	Request Body: Same as Create a Vehicle.
•	Response: Returns the updated vehicle details.
5. Delete a Vehicle
•	Method: DELETE
•	Endpoint: /vehicles/:id
•	Response Example:
{
  "message": "Vehicle deleted"
}

6. Front-End Development
The front-end displays vehicle information and allows filtering.
Key Features:
•	Vehicle Grid: Displays 16 vehicles (4x4) per page.
•	Abstract Information: Under each vehicle, display:
-	Make, Model, Year, Price
-	One vehicle image.
•	Full Information Page:
-	When a user selects a vehicle, they are redirected to a new page with full details.
•	Filters: Users can filter vehicles by:
-	Price
-	Kilometers (KMs)

7. Back-End Development
Key Steps:
1.	Set up Express and MongoDB Connection:
-	Create RESTful routes for CRUD operations.
2.	Define Vehicle Schema:
const vehicleSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    kms: Number,
    vin: String,
    price: Number,
    images: [String]
});
const Vehicle = mongoose.model('Vehicle', vehicleSchema);
3.	Implement Routes:
-	/vehicles - GET, POST
-	/vehicles/:id - GET, PUT, DELETE

8. Database Design
Vehicle Collection Structure:
Field	Type	Description
make	String	Manufacturer of the vehicle
model	String	Model name
year	Number	Manufacturing year
color	String	Vehicle color
kms	Number	Distance traveled (in KM)
vin	String	Unique Vehicle Identification
price	Number	Price of the vehicle
images	Array	Array of image URLs

9. Conclusion
The Car Dealership API offers a robust and user-friendly solution for managing vehicle inventory efficiently. With endpoints for creating, retrieving, updating, and deleting vehicle records, this API simplifies data handling and supports seamless CRUD operations. By leveraging tools like Express, Mongoose, and MongoDB, the system ensures scalability, reliability, and maintainability.

Whether you are building a comprehensive car dealership platform or integrating vehicle management into an existing system, this API serves as a strong foundation to streamline operations and deliver a smooth user experience. Future enhancements, such as search filters, authentication, and advanced analytics, can further expand the capabilities of this API to meet evolving business needs.
