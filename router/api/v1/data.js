const express = require("express");
const router = express.Router();
const dataController = require("../../../controllers/api/v1/data.js"); // Import the data controller

// New routes for image and boolean data
router.post("/imagedata", dataController.saveImageData); // Route for saving image and boolean data
router.get("/alldata", dataController.getAllImageData); // Route for retrieving all image and boolean data

module.exports = router;
