const motorController = require('../Controllers/motorController');

const router = require('express').Router();

router.post('/update', motorController.update);

router.get('/get', motorController.getMotor);

module.exports = router;
