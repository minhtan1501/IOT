const router = require("express").Router();
const dhtController = require("../Controllers/dhtController");

router.post("/store", dhtController.store);

router.get("/get", dhtController.getDht);

router.get("/get-all", dhtController.getAllDht);


module.exports = router;
