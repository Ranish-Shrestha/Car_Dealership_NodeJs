const Vehicle = require('../Models/vehicleModel');

const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (vehicle == null) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json(vehicle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createVehicle = async (req, res) => {
    const { make, model, year, color, kms, vin, price, images } = req.body;

    const vehicle = new Vehicle({
        make,
        model,
        year,
        color,
        kms,
        vin,
        price,
        images
    });

    try {
        const newVehicle = await vehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (vehicle == null) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        const { make, model, year, color, kms, vin, price, images } = req.body;
        if (make != null) vehicle.make = make;
        if (model != null) vehicle.model = model;
        if (year != null) vehicle.year = year;
        if (color != null) vehicle.color = color;
        if (kms != null) vehicle.kms = kms;
        if (vin != null) vehicle.vin = vin;
        if (price != null) vehicle.price = price;
        if (images != null) vehicle.images = images;

        const updatedVehicle = await vehicle.save();
        res.json(updatedVehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (vehicle == null) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        await Vehicle.deleteOne({ _id: req.params.id });
        res.json({ message: 'Vehicle deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createVehicle, deleteVehicle, getAllVehicles, getVehicleById, updateVehicle }