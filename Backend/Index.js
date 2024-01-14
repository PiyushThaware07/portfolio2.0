require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
// Import Router =====================================
const router = require("./router/router");
// Middleware
app.use(cors());
app.use(express.json())

// Home Route
app.get('/', (request, response) => {
    response.send({ message: "Working" });
})
// Routers
app.use("/api/", router);


const port = Number(process.env.PORT) || 1000
app.listen(port, () => {
    console.log(`server is started at  port http://localhost:${port}`);
})