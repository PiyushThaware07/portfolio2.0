require('dotenv').config();
const express = require("express");
const app = express();
// const cors = require("cors");
// Import Router =====================================
const router = require("./router/router");
// Middleware
// app.use(cors());
// app.use(express.json())

// Home Route
app.get('/', (request, response) => {
    response.send("Server is working");
})
// Routers
// app.use("/api/", router);


const port = 8000;
app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})