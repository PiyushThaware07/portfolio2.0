const mongoose = require("mongoose");
const collectionName = "contacts";

// Creating Schema
const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
})


// Creating Model
const contactModel = mongoose.model(collectionName, contactSchema);
module.exports = contactModel;
