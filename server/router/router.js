const express = require("express");
const router = express.Router();
// Import Controllers =================================
const contactController = require("../controller/contactController");

router.route("/contact").post(contactController);

module.exports = router;