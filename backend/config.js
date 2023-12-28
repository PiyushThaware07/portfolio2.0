/*
const mongoose = require("mongoose");
const dbName = "portfolio_contact";
const url = `mongodb://127.0.0.1:27017/${dbName}`; // Offline
mongoose.connect(url);
console.log("MongoDB is connected");
*/


// Online
const mongoose = require("mongoose");
const dbName = "portfolio_contact_online";
const url = `mongodb+srv://piyushbthaware2:KHIfWxK3t0AYvD7p@cluster0.pohskju.mongodb.net/${dbName}?retryWrites=true&w=majority`; // Online
mongoose.connect(url).then(() => {
    console.log("Online MongoDB Connected Successfully...");
}).catch((error) => {
    console.log("Error : ", error);
})
