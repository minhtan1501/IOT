const rainController = require('../Controllers/rainController');

const router = require('express').Router();

router.post('/update', rainController.update);

router.get('/get', rainController.getRain);

router.get("/sendmail",rainController.sendMail);

module.exports = router;
