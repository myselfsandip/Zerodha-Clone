require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const  cookieParser = require("cookie-parser");


const routerHoldings = require("./routes/holdings.js");
const routerPositions = require("./routes/positions.js");
const routerOrders = require("./routes/orders.js");
const routerAuth = require("./routes/authRoute.js");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


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

app.use("/holdings" , routerHoldings);
app.use("/positions",routerPositions);
app.use("/orders",routerOrders);
app.use("/auth",routerAuth);


app.all("*", (req, res, next) => {
    return res.status(404).json({msg:"Page not Found!"});
});




app.listen(PORT, () => {
    console.log("App is running on PORT 3000");
})