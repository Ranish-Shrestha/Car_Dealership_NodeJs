const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    kms: Number,
    vin: { type: String, unique: true },
    price: Number,
    images: [String] // Array to store image paths
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
