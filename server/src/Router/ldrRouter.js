const router = require("express").Router();
const ldrController = require("../Controllers/ldrController");

router.post("/create", ldrController.create);

router.get("/get", ldrController.get);

router.get("/get-all", ldrController.getAll);

module.exports = router;
