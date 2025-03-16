const multer = require('multer');
const path = require('path');

// Set up the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads'); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`); // Unique file naming
  },
});

// File type validation function
function checkFileType(file, cb) {
  // Allowed extensions
  const allowedExtensions = /pdf|docx|doc/;
  const isValidExt = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
  const isValidMime = allowedExtensions.test(file.mimetype);

  if (isValidExt && isValidMime) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Only PDF, docx doc files are allowed!')); // Reject file
  }
}

// Initialize the upload instance
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 2MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb); // Use the file validation function
  },
});

module.exports = upload;
