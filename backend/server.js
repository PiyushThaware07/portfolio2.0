const express = require("express");
const app = express();


app.get('/', (request, response) => {
    response.send("Hello World");
})


const port = 1000
app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})