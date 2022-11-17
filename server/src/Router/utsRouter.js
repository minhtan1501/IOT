const utsController = require('../Controllers/utsController');

const router = require('express').Router();

router.get('/update', utsController.update);

router.get('/get', utsController.get);

module.exports = router;
