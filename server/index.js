const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Server is started");
})

app.listen(8000, () => {
    console.log("Server is started on port 8000");
})