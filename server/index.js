require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// Import Router
const router = require("./router/router");


// Middlewares 
app.use(cors());
app.use(express.json());


app.get("/", (request, response) => {
    response.send(`Server is started ${process.env.PORT}`);
})
// Routers 
app.use("/api", router);

app.listen(process.env.PORT, () => {
    console.log(`Server is started on port http://localhost:${process.env.PORT}/`);
})