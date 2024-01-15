require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// Import Router ==================================================================
const router = require("./router/router");

// Import MongoDB Connection ======================================================
const connectDB = require("./db/connect");


// Middlewares --------------------------------------------------------------------
app.use(cors());
app.use(express.json());


app.get("/", (request, response) => {
    response.send(`Server is started ${process.env.PORT}`);
})

// Routers -------------------------------------------------------------------------
app.use("/api", router);





// Server Starting Function ========================================================
async function startServer() {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server Is Started on port http://localhost:${process.env.PORT}/`);
        })
    }
    catch (error) {
        console.log("Failed To Start Server : ", error);
    }
}
startServer();