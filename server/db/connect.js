require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
    const connect = mongoose.connect('mongodb://127.0.0.1:27017/portfolio_offline')
    console.log("Database is connected");
    return connect;
}

module.exports = connectDB;


