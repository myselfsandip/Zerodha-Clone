const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

userSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,12);
});

module.exports = mongoose.model("User",userSchema);