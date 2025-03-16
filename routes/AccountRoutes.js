const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController"); // Ensure path is correct
const upload = require("../multer/multer"); // For file uploads
const authMiddleware = require("../middleware/authMiddleware"); // Middleware for protected routes

// Render signup pages for Employer and JobSeeker
router.get("/Employer/register", (req, res) => {
  res.render("signup", { role: "Employer" }); // Pass role to render dynamically
});

router.get("/JobSeeker/register", (req, res) => {
  res.render("signup", { role: "JobSeeker" });
});

// Render login page
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", authMiddleware(), (req, res) => {
  const role = req.user ? req.user.role : 'Guest';
  res.render("dashboard", { role });
});


// Render role selection page
router.get("/chooseRole", (req, res) => {
  res.render("roll");
});

// Logout route
router.get("/logout", accountController.logoutAccount);

// Registration API (handles file upload for verification document)
router.post(
  "/api/account/register",
  upload.single("verificationDoc"), // Middleware for single file upload
  accountController.registerAccount
);

// Login API
router.post("/api/account/login", accountController.loginAccount);
router.post("/api/user/login", accountController.loginAccount); // Alias route

module.exports = router;
