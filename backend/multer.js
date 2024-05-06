const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
require("dotenv/config");
const crypto = require('crypto');
const path = require('path');

// const storage = new GridFsStorage({
    
//     url : process.env.DB_URI,
    
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'images'
//           };
//           resolve(fileInfo);
          
//         });
//       });
//     }
//   })

const storage = multer.diskStorage( {
  destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

const upload = multer({ storage })

module.exports = {upload}
