const router = require('express').Router();
const gasController = require('../Controllers/gasController');

router.post('/create', gasController.create);

router.get('/get', gasController.get);

router.get('/get-all', gasController.getAll);

router.get('/sendmail', gasController.sendMail);

module.exports = router;
