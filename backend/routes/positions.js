const express = require("express")
const router = express.Router();
const positionsController = require("../controllers/positions.js");


router.get("/",positionsController.positions);


module.exports = router;