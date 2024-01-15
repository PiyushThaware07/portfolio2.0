require("dotenv").config();
const mongoose = require("mongoose");


function connectDB() {
    const connect = mongoose.connect(
        process.env.OFFLINE_DATABASE
        ||
        process.env.ONLINE_DATABASE
    )
    console.log("Database is connected", process.env.OFFLINE_DATABASE || process.env.ONLINE_DATABASE);
    return connect;
}

module.exports = connectDB;