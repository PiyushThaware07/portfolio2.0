require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
    const connect = mongoose.connect(process.env.ONLINE_DATABASE)
    console.log("Database is connected");
    return connect;
}

module.exports = connectDB;


