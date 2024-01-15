require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send(`Server is started ${process.env.PORT}`);
})
app.get("/about", (request, response) => {
    response.send("about page");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is started on port http://localhost:${process.env.PORT}/`);
})