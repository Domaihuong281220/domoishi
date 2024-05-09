const multer = require('multer');
// const {GridFsStorage} = require('multer-gridfs-storage');
require("dotenv/config");
const crypto = require("crypto");
const path = require("path");
const fs = require('fs');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

function deleteFile(filename, callback) {
  const filePath = path.join(__dirname, 'public', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
          console.error("File does not exist.");
          return callback(new Error("File does not exist."), null);
      }

      fs.unlink(filePath, (err) => {
          if (err) {
              console.error("Error deleting the file.");
              return callback(err, null);
          }

          console.log("File successfully deleted.");
          callback(null, "File successfully deleted.");
      });
  });
}


const upload = multer({ storage });

module.exports = { upload, deleteFile };
