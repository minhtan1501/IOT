const utsController = require('../Controllers/utsController');

const router = require('express').Router();

router.get('/toggle', utsController.toggle);

router.post('/update', utsController.update);

router.get('/get', utsController.get);

module.exports = router;
