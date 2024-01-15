const mongoose = require("mongoose");

// Creating Schema
const contactSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    message: String,
    date: String,
    time: String
});

// Creating Model
const contactModel = mongoose.model(process.env.COLLECTION_CONTACT, contactSchema);

module.exports = contactModel;