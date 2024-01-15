require("dotenv").config()
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Server Started");
})


app.listen(8000, () => {
    console.log("Server Started at port ", 8000);
})