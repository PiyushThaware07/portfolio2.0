require("dotenv").config();
const mongoose = require("mongoose");

const dbURL = process.env.HOST_ENV == "production" ? process.env.ONLINE_DATABASE : process.env.OFFLINE_DATABASE

function connectDB() {
    const connect = mongoose.connect(dbURL)
    console.log("Database is connected", dbURL);
    return connect;
}

module.exports = connectDB;