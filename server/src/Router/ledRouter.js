const ledController = require('../Controllers/ledController');

const router = require('express').Router();


router.get('/toggle',ledController.toggle);

router.get('/get',ledController.getLed);


module.exports = router;