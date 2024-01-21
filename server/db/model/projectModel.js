const mongoose = require("mongoose");

// Creating Schema
const projectSchema = new mongoose.Schema({
    title: String,
    url: String,
    duration: Number,
    description: String,
    thumbnail:String
});

// Creating Model
const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel;