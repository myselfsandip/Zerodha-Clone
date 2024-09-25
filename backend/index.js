require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const holdingsModel = require("./models/holdingsModel");
const positionsModel = require("./models/positionsModel");
const ordersModel = require("./models/ordersModel");

const PORT = process.env.PORT || 3000;
const URL_MONGO = process.env.MONGO_URL;

main().then(() => console.log("DB Connection Successfull!")).catch(err => console.log(err));

async function main() {
    await mongoose.connect(URL_MONGO);
}


const app = express();

app.get("/", (req, res) => {
    res.json({ msg: "Working Fine!" })
});

// app.post("/init", (req, res) => {
//     const positions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     positionsModel.create(positions)
//         .then(result => {
//             console.log(result)
//         })
//         .catch((err) => {
//             console.log("Error Appeared on inserting data", err);
//         })

//     res.status(200).json({ msg: "Success!" });
// });


app.get("/holdings", async (req, res) => {
    const allHoldings = await holdingsModel.find({});
    return res.json(allHoldings)
})
app.get("/positions", async (req, res) => {
    const allPositions = await positionsModel.find({});
    return res.json(allPositions);
})


app.listen(3000, () => {
    console.log("App is running on PORT 3000");
})