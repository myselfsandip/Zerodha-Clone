const { Schema, model } = require("mongoose");

const holdingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const holdingsModel = model("Holding", holdingsSchema);
module.exports = holdingsModel;