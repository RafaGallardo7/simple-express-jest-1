const express = require("express");
const router = express.Router();
const operationController = require("../controller/operations");

// http://localhost:3000/api/operation/sum?num1=7&num2=1
router.get("/operation/sum", operationController.getSum);
router.get("/operation/substraction", operationController.getSubstraction);

module.exports = router;