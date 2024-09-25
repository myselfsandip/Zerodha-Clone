const { Schema, model } = require("mongoose");

const positionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const positionsModel = model("Position", positionsSchema);
module.exports = positionsModel;