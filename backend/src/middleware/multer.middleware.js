const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/React/FullStack-React/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, "mem"+req.body.mobile + "-" + file.originalname);
  }
});

const upload = multer({ storage, });

module.exports = upload;
