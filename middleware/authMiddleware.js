const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
      console.log("No token provided");
      return res.redirect('/login'); // Redirect to login page if token is missing
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log("Decoded User:", req.user);

      // Check if the user exists in the request
      if (!req.user) {
        console.log("Token verification failed, user not decoded");
        return res.redirect('/login'); // Redirect to login page if token is invalid
      }

      // Check roles if provided
      if (roles.length > 0 && !roles.includes(req.user.role)) {
        console.log(`Forbidden: User role (${req.user.role}) not in allowed roles (${roles})`);
        return res.status(403).json({ message: "Forbidden" });
      }

      next(); // Move to the next middleware or route
    } catch (error) {
      console.error("Token verification failed:", error.name);
      
      if (error.name === 'TokenExpiredError') {
        console.log('Token has expired');
        return res.redirect('/login'); // Redirect to login if token has expired
      }

      res.status(500).json({ error: "Failed to authenticate token" });
    }
  };
};

module.exports = authMiddleware;
