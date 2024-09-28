const userModel = require("../models/userModel");
const { createJwtToken } = require("../util/secretToken.js");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res, next) => {
    try {
        const { username, password, createdAt } = req.body;
        const isUserExist = await userModel.findOne({ username });
        if (isUserExist) {
            return res.status(403).json({ msg: "User already exists!" });
        }
        const newUser = await userModel.create({ username, password, createdAt });
        const jwtToken = createJwtToken(newUser._id);
        res.cookie("jwttoken", jwtToken, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, newUser });
        // next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error!" });
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ msg: "Incorrect Username!" });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(401).json({ message: 'Incorrect Password ' });
        }
        const jwtToken = createJwtToken(user._id);
        res.cookie("jwttoken",jwtToken,{
            withCredentials:true,
            httpOnly:false
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        // next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error!" });
    }
}