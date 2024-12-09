const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const vehicleRoutes = require('./routes/vehicleRoutes');
const connectDB = require('./config/db');

const app = express();
// Use CORS middleware
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

dotenv.config()
connectDB()

app.use(bodyParser.json());
// app.use('/uploads', express.static('uploads')); // Serve images
app.use('/vehicles', vehicleRoutes);

const port = 3003;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
