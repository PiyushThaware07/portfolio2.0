const express = require("express");
const router = express.Router();
// Import Controllers ===================================================
const contactController = require("../controller/contactController");
const { insertExperienceController, retriveExperienceController } = require("../controller/experienceController");
const { insertProjectController, retriveProjectController } = require("../controller/projectController");
// Import Middleware =====================================================
const uploadMiddleware = require("../middleware/uploadMiddleware");


// * CRUD on contact
router.route("/contact").post(contactController);
// * CRUD on experience
router.route("/insertExperience").post(insertExperienceController);
router.route("/retriveExperience").get(retriveExperienceController);
// * CRUD on project
router.route("/insertProject").post(uploadMiddleware, insertProjectController);
router.route("/retriveProject").get(retriveProjectController);



module.exports = router;