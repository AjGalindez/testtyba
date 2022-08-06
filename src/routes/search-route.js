const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search-controller");
const { verifyToken } = require("../middlewares/authentication");

router.get("/", verifyToken, searchController.search);

module.exports = router;
