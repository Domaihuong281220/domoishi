const express = require('express');
const router = express.Router();
const schema = require('../model/schemas');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const { upload } = require('../multer.js');

// Route to fetch user data (sample data)
router.get('/user', (req, res) => {
    const userData = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
    ];
    res.json(userData);
});

// Route to create a new user document in MongoDB
router.post('/users', async (req, res) => {
    const { name, username } = req.body;
    const userData = { name, username };
    try {
        const newUser = new schema.User(userData);
        const saveUser = await newUser.save();
        res.status(200).json({
            message: 'User added successfully',
            data: saveUser
        });
    } catch (err) {
        res.status(500).json({
            message: 'User not added',
            error: err.message
        });
    }
});

// MongoDB connection setup for GridFS
const url = process.env.DB_URI; // It's safer to use environment variables for credentials
const connect = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GridFS stream initialization
// let gfs;
// connect.once('open', () => {
//     gfs = new mongoose.mongo.GridFSBucket(connect.db, {
//         bucketName: 'images'
//     });
// });

// // Route to handle image upload using GridFS
// router.route('/image')
//     .post(upload.single('file'), (req, res, next) => {
//         if (req.file) {
//             console.table(req.file);
//             res.status(200).json({ filename: req.file.filename });
//         } else {
//             res.status(400).json({ message: 'No file uploaded' });
//         }
//     });


// others endpoints
router.route('/image')
    .post(upload.single("file"), async(req, res, next) => {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        
        console.log(req.file)
        const {filename, path} = req.file;
        const newsData = {filename, path}
        try{
            const newNews = new schema.News(newsData);
            const saveNews = await newNews.save();
            res.status(200).json({
                path:req.file.path,
                message: 'News added successfully',
                data: saveNews
            });}
            catch(err) {
                res.status(500).json({
                    message: 'News not added',
                    error: err.message
                });
            
        }
        

        // return res.json({
            
        // });
    });

module.exports = router;
