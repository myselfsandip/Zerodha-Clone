const ordersModel = require("../models/ordersModel");



module.exports.newOrder =  async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        if (mode === "Sell") {
            const isStockExists = await ordersModel.findOne({ name: name });
            if (!isStockExists) {
                return res.status(500).send("Stock Does Not Exists");
            }
        }
        const newOrder = await ordersModel.create({ name, qty, price, mode });
        if (mode === "BUY") {
            // Random % for day
            const randomNumber = Math.floor(Math.random() * 5) - 5; // Random number between -10 and 9
            const formattedNumber = `${Math.sign(randomNumber) === 1 ? '+' : ''}${randomNumber}%`;

            const newHolding = new holdingsModel({
                name: newOrder.name,
                qty: newOrder.qty,
                avg: newOrder.price / newOrder.qty,
                price: newOrder.price,
                net: (newOrder.price - (newOrder.price / newOrder.qty)).toString(),
                day: formattedNumber,
            });
            await newHolding.save();
        }
        return res.status(200).send("OK")
    } catch (error) {
        console.error(error)
        return res.status(500).send("Internal Server Error");
    }
}