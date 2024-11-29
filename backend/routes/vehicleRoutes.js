const express = require('express');
const { getAllVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle } = require('../Controllers/vehicleController');

const router = express.Router();

router.route('/').get(getAllVehicles);
router.route('/:id').get(getVehicleById);
router.route('/').post(createVehicle);
router.route('/:id').put(updateVehicle);
router.route('/:id').delete(deleteVehicle);

module.exports = router;
