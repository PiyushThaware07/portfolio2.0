require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Server Started");
})

app.listen(process.env.PORT, () => {
    console.log("Server Started at port ", process.env.PORT);
})