const express = require("express")
const router = express.Router();
const holdingsController = require("../controllers/holdings.js");


router.get("/",holdingsController.holdings)


module.exports = router;