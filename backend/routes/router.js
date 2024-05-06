const express = require('express');
const router = express.Router();
const schema = require('../model/schemas');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
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
router.post('/news', upload.array('files', 2), async (req, res) => {
    const { title, shortdescription, longdescription } = req.body;
    let titlepic, detailpic;

    if (req.files && req.files.length > 0) {
        // Loop through the uploaded files
        req.files.forEach((file, index) => {
            console.log('Uploaded File:', {
                filename: file.filename,
                path: file.path,
                size: file.size,
                index: index
            });

            // Assign paths based on the index
            if (index == 0) {
                titlepic = file.path.substring(7);  // Adjust 7 according to your path structure
            } else if (index == 1) {
                detailpic = file.path.substring(7);  // Adjust 7 according to your path structure
            }
        });

        // console.log('Title Picture:', titlepic);
        // console.log('Detail Picture:', detailpic);

        // Construct the news data object
        const newsData = { title, shortdescription, longdescription, detailpic, titlepic };

        try {
            const newNews = new schema.News(newsData);
            const saveNews = await newNews.save();
            // console.log('New News ID:', saveNews._id);
            res.status(200).json({
                message: 'News added successfully',
                data: saveNews,
                id: saveNews._id
            });
        } catch (err) {
            res.status(500).json({
                message: 'News not added',
                error: err.message
            });
        }
    } else {
        console.log('Request Body:', req.body); // Log body to debug in case of no files
        res.status(400).json({ message: 'No files uploaded' });
    }
});


router.get('/news', async (req, res) => {
    const News = schema.News
    try {
        const newsItems = await News.find({});
        if (newsItems.length > 0) {
            res.status(200).json({
                success: true,
                count: newsItems.length,
                data: newsItems
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'No news found'
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: err.message
        });
    }
});


router.get('/news/by-id', async (req, res) => {
    const { id } = req.query;  // Access id from query parameters

    if (!id) {
        return res.status(400).json({
            success: false,
            message: 'ID parameter is required'
        });
    }

    try {
        const newsItem = await schema.News.findById(id);  // Search by document ID

        if (newsItem) {
            res.status(200).json({
                success: true,
                data: newsItem
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'No news found with the given ID'
            });
        }
    } catch (err) {
        if (err.kind === 'ObjectId') {
            // This handles the error that occurs when the ID format is invalid
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format'
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: err.message
        });
    }
});



router.put('/news/:id', async (req, res) => {
    const { id } = req.params;  // Access ID from URL parameters
    const updateData = req.body;  // Data to update

    if (!id) {
        return res.status(400).json({
            success: false,
            message: 'ID parameter is required'
        });
    }

    try {
        // Find the news by ID and update it
        const updatedNews = await schema.News.findByIdAndUpdate(
            id, // Using the ID directly
            updateData,
            { new: true, runValidators: true }  // Return the updated object and run model validators
        );

        if (updatedNews) {
            res.status(200).json({
                success: true,
                message: 'News updated successfully',
                data: updatedNews
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'No news found with the given ID'
            });
        }
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format'
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: err.message
        });
    }
});

router.delete('/news/:id', async (req, res) => {
    const { id } = req.params;  // Access ID from URL parameters

    if (!id) {
        return res.status(400).json({
            success: false,
            message: 'ID parameter is required'
        });
    }

    try {
        // Attempt to delete the news item by ID
        const deletedNews = await schema.News.findByIdAndDelete(id);

        if (deletedNews) {
            res.status(200).json({
                success: true,
                message: 'News deleted successfully',
                data: deletedNews
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'No news found with the given ID'
            });
        }
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format'
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: err.message
        });
    }
});




module.exports = router;
