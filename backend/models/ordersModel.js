const { Schema, model } = require("mongoose");

const ordersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String
});

const ordersModel = model("Order", ordersSchema);
module.exports = ordersModel;