const express = require("express");
const router = express.Router();
const dataController = require("../controller/datas");

router.get("/data/sum", dataController.getSum);
router.get("/data/message", dataController.showMessage);

module.exports = router;