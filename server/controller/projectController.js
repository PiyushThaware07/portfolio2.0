// Import Models ==================================================
const projectModel = require("../db/model/projectModel");

// & 1. Inert Projects ========================================
async function insertProjectController(request, response) {

    const thumbnail = request.file.filename;
    request.body.thumbnail = thumbnail;

    try {
        const newData = await projectModel(request.body);
        const saveData = await newData.save();
        if (saveData) {
            response.status(200).send({
                success: true,
                data: newData,
                statusCode: 200
            })
        }
        else {
            response.status(500).send({
                success: false,
                data: "Internal Server Error at InsertProject Controller",
                statusCode: 500
            })
        }
    }
    catch (error) {
        response.status(500).send({
            success: false,
            data: "Internal Server Error at InsertProject Controller",
            statusCode: 500
        })
    }
}


// & 2. Read Projects ========================================
async function retriveProjectController(request, response) {
    try {
        const readData = await projectModel.find();
        response.status(200).send({
            success: true,
            data: readData,
            statusCode: 200
        })

    }
    catch (error) {
        response.status(500).send({
            success: false,
            data: "Internal Server Error at RetriveExperience Controller",
            statusCode: 500
        })
    }
}



module.exports = { insertProjectController, retriveProjectController };