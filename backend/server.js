const express = require("express");
const app = express();
// Configure Mongoose Server ------------------
require("./config");
// Import Mongoose Models ---------------------
const contactModel = require("./mongo");

// Connect Backend To Frontend ----------------
const cors = require("cors");

app.use(cors({
    origin: ['*'],
    methods: ['POST', 'GET'],
    credentials: true
}));

app.get('/', (request, response) => {
    response.json("started");
})


app.use(express.json());
app.post('/contactInsert', async (request, response) => {
    console.log("Data Received FrontEnd", request.body);

    let inserData = await new contactModel(request.body);
    let store = await inserData.save();

    console.log("-------->> Inserted successfully", store);
    response.send(JSON.stringify("data received"));
})



const port = 3001
app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})