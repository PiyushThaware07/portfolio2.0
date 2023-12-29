const express = require("express");
const app = express();
// Configure Mongoose Server ------------------
require("./config");
// Import Mongoose Models ---------------------
const contactModel = require("./mongo");

// Connect Backend To Frontend ----------------
const cors = require("cors");


app.use(cors());


app.get('/', (request, response) => {
    response.send("started");
})


// Set EJS as templating engine 
const path = require("path");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')))
app.get('/login', (request, response) => {
    response.render("Login", {})
})


app.use(express.json());
app.post('/contactInsert', async (request, response) => {
    console.log("Data Received FrontEnd", request.body);

    let inserData = await new contactModel(request.body);
    let store = await inserData.save();

    console.log("-------->> Inserted successfully", store);
    response.send(JSON.stringify("data received"));
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})