const express = require("express");
const positionController = require("../controllers/PositionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Routes for rendering views
router.get(
  "/create",
  authMiddleware(["Admin", "Employer"]),
  (req, res) => {
    res.render("createPosition", {
      userId: req.user.id,
      role: req.user.role,
    });
  }
);

router.get(
  "/list",
  authMiddleware(["Admin", "Employer"]),
  positionController.getPositionsWithOrganization
);

router.get(
  "/applications",
  authMiddleware(["Admin", "JobSeeker"]),
  (req, res) => {
    res.render("positionApplication", { role: req.user.role });
  }
);

// API routes
router.post(
  "/create",
  authMiddleware(["Admin", "Employer"]),
  positionController.createPosition
);

router.delete(
  "/:id",
  authMiddleware(["Admin", "Employer"]),
  positionController.deletePosition
);

module.exports = router;
