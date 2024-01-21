const multer = require("multer");
const storageLocation = "uploads";
const uploadMiddleware = multer({
    storage: multer.diskStorage({
        destination: function (request, file, callback) {
            callback(null, storageLocation);
        },
        filename: function (request, file, callback) {
            callback(null, file.originalname);
        }
    })
}).single("thumbnail");


module.exports = uploadMiddleware;