const multer = require('multer');
// const {GridFsStorage} = require('multer-gridfs-storage');
require("dotenv/config");
const crypto = require("crypto");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = { upload };
