const express = require("express")
const router = express.Router();
const ordersController = require("../controllers/orders.js");


router.post("/newOrder",ordersController.newOrder);


module.exports = router;