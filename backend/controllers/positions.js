const positionsModel = require("../models/positionsModel");

module.exports.positions = async (req, res) => {
    const allPositions = await positionsModel.find({});
    return res.json(allPositions);
}