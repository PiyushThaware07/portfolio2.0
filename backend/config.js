const mongoose = require("mongoose");
const dbName = "portfolio_contact";
const url = `mongodb://127.0.0.1:27017/${dbName}`;
mongoose.connect(url);
console.log("MongoDB is connected");