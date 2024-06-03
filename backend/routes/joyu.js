
const express = require("express");
const joyu = express.Router();
const schema = require("../model/schemas");
const mongoose = require("mongoose");
const joyuSchemas = require("../model/joyuschema");
const nodemailer = require('nodemailer');
const { uploadJoyu, deleteFileJoyu } = require("../multer.js");


// Route to fetch user data (sample data)
router.get("/joyu/users", checkSecretKey, async (req, res) => {
  const Admin = joyuSchemas.Admin;
  try {
    const AdminData = await Admin.find();
    res.json(AdminData);
  } catch (err) {
    res.status(500).json({
      message: "User not found",
      error: err.message,
    });
  }
});

function checkSecretKey(req, res, next) {
  const secretKey = req.headers['x-secret-key'];  // Typically, custom headers are prefixed with 'x-'
  const mySecretKey = process.env.MY_SECRET_KEY;  // Your secret key stored in environment variables

  if (!secretKey || secretKey !== mySecretKey) {
    return res.status(401).json({
      message: "Invalid or missing secret key"
    });
  }

  next();  // Proceed to the next middleware or route handler
}

// Route to create a new user document in MongoDB
router.post("/joyu/user", checkSecretKey, async (req, res) => {
  const { name, username, password, email, role, phonenumber } = req.body;
  const AdminData = { name, username, password, email, role, phonenumber };
  try {
    const newAdmin = new joyuSchemas.Admin(AdminData);
    const saveAdmin = await newAdmin.save();
    res.status(200).json({
      message: "User added successfully",
      data: saveAdmin,
    });
  } catch (err) {
    res.status(500).json({
      message: "User not added",
      error: err.message,
    });
  }

});


router.delete("/joyu/user/:id", checkSecretKey, async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID and delete
    const deletedUser = await joyuSchemas.Admin.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Failed to delete user",
      error: err.message
    });
  }
});



// PUT route to reset a user's password
router.put("/joyu/user/reset-password", checkSecretKey, async (req, res) => {
  const { username, phonenumber, newpassword } = req.body;
  // console.log(req.body);

  try {
    // Find the user by username
    const user = await joyuSchemas.Admin.findOne({ username });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the phone number matches the one on file
    if (user.phonenumber !== phonenumber) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    // Hash the new password
    // const hashedPassword = await bcrypt.hash(newpassword, 10);

    // Update the user's password
    user.password = newpassword;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Password could not be reset",
      error: err.message
    });
  }
});


router.post("/joyu/login", checkSecretKey, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    const user = await joyuSchemas.Admin .findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Logged in successfully",
      user
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});





// others endpoints
router.post("/news", upload.array("files", 2), async (req, res) => {
  const { title, shortdescription, longdescription } = req.body;
  let titlepic, detailpic;

  if (req.files && req.files.length > 0) {
    // Loop through the uploaded files
    req.files.forEach((file, index) => {
      //   console.log("Uploaded File:", {
      //     filename: file.filename,
      //     path: file.path,
      //     size: file.size,
      //     index: index,

      //   }
      // );

      // Assign paths based on the index
      if (index == 0) {
        titlepic = file.path.substring(7); // Adjust 7 according to your path structure
      } else if (index == 1) {
        detailpic = file.path.substring(7); // Adjust 7 according to your path structure
      }
    });

    // console.log('Title Picture:', titlepic);
    // console.log('Detail Picture:', detailpic);

    // Construct the news data object
    const newsData = {
      title,
      shortdescription,
      longdescription,
      detailpic,
      titlepic,
    };

    try {
      const newNews = new schema.News(newsData);
      const saveNews = await newNews.save();
      // console.log('New News ID:', saveNews._id);
      res.status(200).json({
        message: "News added successfully",
        data: saveNews,
        id: saveNews._id,
      });
    } catch (err) {
      res.status(500).json({
        message: "News not added",
        error: err.message,
      });
    }
  } else {
    console.log("Request Body:", req.body); // Log body to debug in case of no files
    res.status(400).json({ message: "No files uploaded" });
  }
});

router.get("/news", async (req, res) => {
  const News = schema.News;
  try {
    const newsItems = await News.find({});
    if (newsItems.length > 0) {
      res.status(200).json({
        success: true,
        count: newsItems.length,
        data: newsItems,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No news found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.get("/news/by-id", async (req, res) => {
  const { id } = req.query; // Access id from query parameters

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  try {
    const newsItem = await schema.News.findById(id); // Search by document ID

    if (newsItem) {
      res.status(200).json({
        success: true,
        data: newsItem,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No news found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      // This handles the error that occurs when the ID format is invalid
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.put("/news/:id", upload.array("files", 2), async (req, res) => {
  const { id } = req.params; // Access ID from URL parameters
  const updateData = req.body; // Data to update


  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  console.log(req.files)

  if (req.files && req.files.length > 0) {
    // Loop through the uploaded files
    req.files.forEach((file, index) => {
      console.log("Uploaded File:", {
        filename: file.filename,
        path: file.path,
        size: file.size,
        index: index,
      });


      // Assign paths based on the index
      if (index == 0) {
        titlepic = file.path.substring(7); // Adjust 7 according to your path structure
        updateData['titlepic'] = file.filename
      } else if (index == 1) {
        detailpic = file.path.substring(7); // Adjust 7 according to your path structure
        updateData['detailpic'] = file.filename
      }
    })
  }
  try {
    // Find the news by ID and update it
    const updatedNews = await schema.News.findByIdAndUpdate(
      id, // Using the ID directly
      updateData,
      { new: true, runValidators: true } // Return the updated object and run model validators
    );

    if (updatedNews) {
      res.status(200).json({
        success: true,
        message: "News updated successfully",
        data: updatedNews,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No news found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.delete("/news/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  try {
    const deletedNews = await schema.News.findByIdAndDelete(id);
    if (!deletedNews) {
      return res.status(404).json({
        success: false,
        message: "No news found with the given ID",
      });
    }

    // Deletion of files using callback handling
    deleteFile(deletedNews.detailpic, (err) => {
      if (err) {
        console.error("Error deleting detail picture:", err);
        // Consider how you want to handle partial deletion failures
      }
    });

    deleteFile(deletedNews.titlepic, (err) => {
      if (err) {
        console.error("Error deleting title picture:", err);
        // Consider how you want to handle partial deletion failures
      }
    });

    res.status(200).json({
      success: true,
      message: "News deleted successfully",
      data: deletedNews,
    });

  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.post("/careers", async (req, res) => {
  const { position, description, availability, linkform } = req.body;
  const careersData = { position, description, availability, linkform };

  try {
    const newCareers = new schema.Careers(careersData);
    const saveCareers = await newCareers.save(); // Use 'await' to wait for the save operation to complete
    // console.table(saveCareers);

    res.status(200).json({
      message: "Careers added successfully",
      data: saveCareers,
      // id: saveCareers._id  // Now this should correctly display the _id
    });
  } catch (err) {
    console.error(err); // It's good to log the error for debugging
    res.status(500).json({
      message: "Careers not added",
      error: err.message,
    });
  }
});

router.get("/careers", async (req, res) => {
  const careerSchema = schema.Careers;
  try {
    const careersItems = await careerSchema.find({});
    if (careersItems.length > 0) {
      res.status(200).json({
        success: true,
        count: careersItems.length,
        data: careersItems,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No careers found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.get("/careers/by-id", async (req, res) => {
  const { id } = req.query; // Access id from query parameters
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const careersItem = await schema.Careers.findById(id); // Search by document ID
    if (careersItem) {
      res.status(200).json({
        success: true,
        data: careersItem,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No careers found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      // This handles the error that occurs when the ID format is invalid
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.put("/careers/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const updatedCareers = await schema.Careers.findByIdAndUpdate(
      id, // Using the ID directly
      updateData,
      { new: true, runValidators: true } // Return the updated object and run model validators
    );
    if (updatedCareers) {
      res.status(200).json({
        success: true,
        message: "Careers updated successfully",
        data: updatedCareers,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No careers found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.delete("/careers/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const deletedCareers = await schema.Careers.findByIdAndDelete(id);
    if (deletedCareers) {
      res.status(200).json({
        success: true,
        message: "Careers deleted successfully",
        data: deletedCareers,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No careers found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.post("/metatag", async (req, res) => {
  const { path, title, name, content, property } = req.body;
  const metatagData = {
    path: path,
    title: title,
    name: name,
    content: content,
    property: property,
  };

  try {
    const newMetatag = new schema.MetaTag(metatagData);
    const saveMetatag = await newMetatag.save(); // Use 'await' to wait for the save operation to complete
    // console.table(saveMetatag);
    res.status(200).json({
      message: "Metatag added successfully",
      data: saveMetatag,
      // id: saveMetatag._id  // Now this should correctly display the _id
    });
  } catch (err) {
    console.error(err); // It's good to log the error for debugging
    res.status(500).json({
      message: "Metatag not added",
      error: err.message,
    });
  }
});

router.get("/metatag", async (req, res) => {
  const metatagSchema = schema.MetaTag;
  try {
    const metatagItems = await metatagSchema.find({});
    if (metatagItems.length > 0) {
      res.status(200).json({
        success: true,
        count: metatagItems.length,
        data: metatagItems,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No metatag found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.put("/metatag/:id", async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const updatedMetatag = await schema.MetaTag.findByIdAndUpdate(
      id, // Using the ID directly
      updateData,
      { new: true, runValidators: true } // Return the updated object and run model validators
    );
    if (updatedMetatag) {
      res.status(200).json({
        success: true,
        message: "Metatag updated successfully",
        data: updatedMetatag,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No metatag found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.delete("/metatag/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const deletedMetatag = await schema.MetaTag.findByIdAndDelete(id);
    if (deletedMetatag) {
      res.status(200).json({
        success: true,
        message: "Metatag deleted successfully",
        data: deletedMetatag,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No metatag found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.post('/delete-file', (req, res) => {
  const { filename } = req.body; // Extract filename from POST request body

  if (!filename) {
    return res.status(400).json({
      success: false,
      message: "Filename is required in the request body"
    });
  }

  // Call deleteFile function to attempt file deletion
  deleteFile(filename, (err, message) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message
      });
    }

    res.status(200).json({
      success: true,
      message: "File successfully deleted"
    });
  });
});

// Route to fetch location data (sample data)
router.get("/locations", async (req, res) => {
  const Location = schema.Location;
  try {
    const locationData = await Location.find();
    res.json(locationData);
  } catch (err) {
    res.status(500).json({
      message: "User not found",
      error: err.message,
    });
  }
});

router.post("/locations", async (req, res) => {
  const { name, address, phone, website } = req.body;
  const locationData = { name: name, address: address, phone: phone, website: website };

  try {
    const newLocation = new schema.Location(locationData);
    const saveLocation = await newLocation.save(); // Use 'await' to wait for the save operation to complete
    res.status(200).json({
      message: "Location added successfully",
      data: saveLocation,
      // id: saveLocation._id  // Now this should correctly display the _id
    });
  } catch (err) {
    console.error(err); // It's good to log the error for debugging
    res.status(500).json({
      message: "Location not added",
      error: err.message,
    });
  }
})

router.put("/locations/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });

  }
  try {
    const updatedLocation = await schema.Location.findByIdAndUpdate(
      id, // Using the ID directly
      updateData,
      { new: true, runValidators: true } // Return the updated object and run model validators
    );
    if (updatedLocation) {
      res.status(200).json({
        success: true,
        message: "Location updated successfully",
        data: updatedLocation,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No location found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
})

router.delete("/locations/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  try {
    const deletedLocation = await schema.Location.findByIdAndDelete(id);
    if (deletedLocation) {
      res.status(200).json({
        success: true,
        message: "Location deleted successfully",
        data: deletedLocation,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No location found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
})

router.get("/locations/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const location = await schema.Location.findById(id);
    if (location) {
      res.status(200).json({
        success: true,
        data: location,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No location found with the given ID",
      });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

router.get("/locationframe", async (req, res) => {
  const LocationFrame = schema.LocationFrame;
  try {
    const locationData = await LocationFrame.find();
    res.json(locationData);
  } catch (err) {
    res.status(500).json({
      message: "User not found",
      error: err.message,
    });
  }
});
router.put('/locationframe/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  try {
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }

    // Update the document
    const updatedLocationFrame = await schema.LocationFrame.findByIdAndUpdate(
      id, // Using the ID directly
      updateData,
      { new: true, runValidators: true } // Return the updated object and run model validators
    );

    if (updatedLocationFrame) {
      res.status(200).json({
        success: true,
        message: "Frame updated successfully",
        data: updatedLocationFrame,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Frame not found with the given ID",
      });
    }
  } catch (err) {
    console.error('Error during update:', err);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});


joyu.get("/joyu/customer", async (req, res) => {
    const JoyuUser = joyuSchemas.JoyuUser;
    try {
      const userData = await JoyuUser.find();
      const emails = userData.map(user => user.email);
    console.log(emails);
      res.json(userData);
    } catch (err) {
      res.status(500).json({
        message: "User not found",
        error: err.message,
      });
    }
  });

joyu.post("/joyu/customer", async(req, res, next) => {
    const { email } = req.body;
    try {
      const saveUser = await joyuSchemas.JoyuUser.create({
        email,
      });
      res.status(200).json({
        message: "User added successfully",
        data: saveUser,
      });
    } catch (err) {
      res.status(500).json({
        message: "User not added",
        error: err.message,
      });
    }
  });

joyu.post("/joyu/sendemail", async (req, res) =>{
  const JoyuUser = joyuSchemas.JoyuUser;
  const emailData = req.body; // Assuming req.body contains the data to send
  try {
    const userData = await JoyuUser.find();
    const emails = userData.map(user => user.email);
    console.log(emails);

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'domaihuong.28.12.20@gmail.com', // Replace with your email
        pass: 'ltbk kpqm opqb bkpw', // Replace with your email password
      },
    });

    // Send emails to all users
    for (const email of emails) {
      const mailOptions = {
        from: '"Your Name" <your-email@example.com>', // Sender address
        to: email, // List of receivers
        subject: 'Subject of your email', // Subject line
        text: `Plain text version of the message: ${JSON.stringify(emailData)}`, // Plain text body
        html: `<p>HTML version of the message: ${JSON.stringify(emailData)}</p>`, // HTML body
      };

      await transporter.sendMail(mailOptions);
    }

    res.json(userData);
  } catch (err) {
    res.status(500).json({
      message: "User not found",
      error: err.message,
    });
  }
})

module.exports = joyu;