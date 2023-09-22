const express = require("express");
const router = express.Router();
const functionController = require("../controller/functions");

router.get("/function/lowestvalue", functionController.getLowestValue);
router.get("/function/substraction", functionController.getSubstraction);

module.exports = router;