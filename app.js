require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db'); // Updated for dbinit.js if renamed
const path = require('path');
const cookieParser = require('cookie-parser');



// Import routes
const accountRoutes = require("./routes/AccountRoutes");
const positionRoutes = require("./routes/PositionRoutes");
const applicationRoutes = require("./routes/ApplicationRoutes");

// Set up environment variables
const port = process.env.PORT || 3000;

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));


// Serve static files
app.use("/css", express.static(path.join(__dirname, "css"))); // Serve CSS folder explicitly
app.use("/public", express.static(path.join(__dirname, "public"))); // Serve public assets

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", accountRoutes); 

app.use("/positions", positionRoutes);
app.use("/applications", applicationRoutes);
app.use("/organization", positionRoutes);

// Default route
app.get("/", (req, res) => {
    res.render("login");
});

// Start the server
const start = async () => {
    try {
        await db.connect();
        app.listen(port, () => console.log(`Server is running on port ${port}`));
      } catch (err) {
        console.error("Failed to start the server:", err);
      }
      
};

start();
