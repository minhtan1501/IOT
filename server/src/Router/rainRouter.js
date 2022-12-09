const rainController = require('../Controllers/rainController');

const router = require('express').Router();

router.post('/update', rainController.update);

router.get('/get', rainController.getRain);

module.exports = router;
