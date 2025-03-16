const express = require("express");
const router = express.Router();
const { createApplication, getApplications, getApplicationsByPosition } = require("../controllers/ApplicationController"); // Updated controller name
const verifyToken = require("../middleware/authMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

// Route to create a new application for a position
router.get("/apply/:id", authMiddleware, createApplication);

// Route to get all applications by the logged-in user
router.get("/applications", authMiddleware, getApplications);

// Route to get applications for a specific position
router.get("/applications/position/:positionId", authMiddleware, getApplicationsByPosition);

module.exports = router;
