const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction-controller");
const { verifyToken } = require("../middlewares/authentication");

router.get("/", verifyToken, transactionController.getAllTransactions);

module.exports = router;
