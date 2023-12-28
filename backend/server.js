const express = require("express");
const app = express();
// Configure Mongoose Server ------------------
require("./config");
// Import Mongoose Models --------------------
const contactModel = require("./mongo");

app.use(express.json());
app.post('/', async (request, response) => {
    let readData = await contactModel.find();
    console.log(request.body);
    response.send(request.body);
})


const port = 1000
app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})