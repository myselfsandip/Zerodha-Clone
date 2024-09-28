const holdingsModel = require("../models/holdingsModel");

module.exports.holdings = async (req, res) => {
    const allHoldings = await holdingsModel.find({});
    return res.json(allHoldings)
}