const express = require('express');
const router = express.Router();
const flightController = require('../controller/flight_info_controller')

router.post('/promo', flightController.getBookingDetails);

module.exports = router;