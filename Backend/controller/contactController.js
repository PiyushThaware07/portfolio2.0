// Import Date Function -----------------------------
const generateDate = require("../function/generateDate");
const generateTime = require("../function/generateTime");

function contactController(request, response) {
    try {
        const currentDate = generateDate();
        const currentTime = generateTime();
        const requestedData = request.body;
        requestedData.date = currentDate;
        requestedData.time = currentTime;

        response.status(200).send({
            success: true,
            data: requestedData,
            statusCode: 200
        })

    }
    catch (error) {
        response.status(500).send({
            success: false,
            data: "Internal Server Error at Contact Controller",
            statusCode: 500
        })
    }
}

module.exports = contactController;