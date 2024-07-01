const express = require("express");
const joyu = express.Router();
const schema = require("../model/schemas");
const mongoose = require("mongoose");
const multer = require("multer");
const joyuSchemas = require("../model/joyuschema");
const nodemailer = require("nodemailer");
const { uploadJoyu, deleteFileJoyu } = require("../multer.js");

// Route to fetch user data (sample data)
joyu.get("/joyu/users", checkSecretKey, async (req, res) => {
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
  const secretKey = req.headers["x-secret-key"]; // Typically, custom headers are prefixed with 'x-'
  const mySecretKey = process.env.MY_SECRET_KEY; // Your secret key stored in environment variables

  if (!secretKey || secretKey !== mySecretKey) {
    return res.status(401).json({
      message: "Invalid or missing secret key",
    });
  }

  next(); // Proceed to the next middleware or route handler
}

// Route to create a new user document in MongoDB
joyu.post("/joyu/user", checkSecretKey, async (req, res) => {
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

joyu.delete("/joyu/user/:id", checkSecretKey, async (req, res) => {
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
      error: err.message,
    });
  }
});

// PUT route to reset a user's password
joyu.put("/joyu/user/reset-password", checkSecretKey, async (req, res) => {
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
      error: err.message,
    });
  }
});

joyu.post("/joyu/login", checkSecretKey, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await joyuSchemas.Admin.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Logged in successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

// others endpoints
joyu.post("/joyu/news", uploadJoyu.array("files", 2), async (req, res) => {
  const { title, shortdescription, longdescription } = req.body;
  let titlepic, detailpic;

  if (req.files && req.files.length > 0) {
    // Loop through the uploaded files
    req.files.forEach((file, index) => {
      if (index == 0) {
        titlepic = file.path.substring(9); // Adjust 7 according to your path structure
      } else if (index == 1) {
        detailpic = file.path.substring(9); // Adjust 7 according to your path structure
      }
    });
    const newsData = {
      title,
      shortdescription,
      longdescription,
      detailpic,
      titlepic,
    };

    try {
      const newNews = new joyuSchemas.JoyuNews(newsData);
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

joyu.get("/joyu/news", async (req, res) => {
  const News = joyuSchemas.JoyuNews;
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

joyu.get("/joyu/news/:id", async (req, res) => {
  const { id } = req.params; // Access id from query parameters
  console.log(id);
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  try {
    const newsItem = await joyuSchemas.JoyuNews.findById(id); // Search by document ID

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

joyu.put("/joyu/news/:id", uploadJoyu.array("files", 2), async (req, res) => {
  const { id } = req.params; // Access ID from URL parameters
  const updateData = req.body; // Data to update

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  // console.log(req.files)

  if (req.files && req.files.length > 0) {
    // Loop through the uploaded files
    req.files.forEach((file, index) => {
      // console.log("Uploaded File:", {
      //   filename: file.filename,
      //   path: file.path,
      //   size: file.size,
      //   index: index,
      // });

      // Assign paths based on the index
      if (index == 0) {
        titlepic = file.path.substring(7); // Adjust 7 according to your path structure
        updateData["titlepic"] = file.filename;
      } else if (index == 1) {
        detailpic = file.path.substring(7); // Adjust 7 according to your path structure
        updateData["detailpic"] = file.filename;
      }
    });
  }
  try {
    // Find the news by ID and update it
    const updatedNews = await joyuSchemas.JoyuNews.findByIdAndUpdate(
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

joyu.delete("/joyu/news/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  try {
    const deletedNews = await joyuSchemas.JoyuNews.findByIdAndDelete(id);
    if (!deletedNews) {
      return res.status(404).json({
        success: false,
        message: "No news found with the given ID",
      });
    }

    // Deletion of files using callback handling
    deleteFileJoyu(deletedNews.detailpic, (err) => {
      if (err) {
        console.error("Error deleting detail picture:", err);
        // Consider how you want to handle partial deletion failures
      }
    });

    deleteFileJoyu(deletedNews.titlepic, (err) => {
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

joyu.post("/joyu/careers", async (req, res) => {
  const { position, description, availability, address, responsibility } =
    req.body;
  const careersData = { position, description, availability, address, re };

  try {
    const newCareers = new joyuSchemas.JoyuCareers(careersData);
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

joyu.get("/joyu/careers", async (req, res) => {
  const careerSchema = joyuSchemas.JoyuCareers;
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

joyu.get("/joyu/careers/:id", async (req, res) => {
  const { id } = req.query; // Access id from query parameters
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const careersItem = await joyuSchemas.JoyuCareers.findById(id); // Search by document ID
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

joyu.put("/joyu/careers/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const updatedCareers = await joyuSchemas.JoyuCareers.findByIdAndUpdate(
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

joyu.delete("/joyu/careers/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const deletedCareers = await joyuSchemas.JoyuCareers.findByIdAndDelete(id);
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

joyu.post("/joyu/metatag", async (req, res) => {
  const { path, title, name, content, property, page } = req.body;
  const metatagData = {
    path: path,
    title: title,
    name: name,
    content: content,
    property: property,
    page: page,
  };

  try {
    const newMetatag = new joyuSchemas.JoyuMetaTag(metatagData);
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

joyu.get("/joyu/metatag", async (req, res) => {
  const metatagSchema = joyuSchemas.JoyuMetaTag;
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

joyu.put("/joyu/metatag/:id", async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const updatedMetatag = await joyuSchemas.JoyuMetaTag.findByIdAndUpdate(
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

joyu.delete("/joyu/metatag/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const deletedMetatag = await joyuSchemas.JoyuMetaTag.findByIdAndDelete(id);
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

joyu.post("/joyu/delete-file", (req, res) => {
  const { filename } = req.body; // Extract filename from POST request body

  if (!filename) {
    return res.status(400).json({
      success: false,
      message: "Filename is required in the request body",
    });
  }

  // Call deleteFile function to attempt file deletion
  deleteFileJoyu(filename, (err, message) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "File successfully deleted",
    });
  });
});

// Route to fetch location data (sample data)
joyu.get("/joyu/locations", async (req, res) => {
  const Location = joyuSchemas.JoyuLocation;
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

joyu.post("/joyu/locations", async (req, res) => {
  const { name, address, phone, pickuplink, deliverylink, available } =
    req.body;
  const locationData = {
    name: name,
    address: address,
    phone: phone,
    pickuplink: pickuplink,
    deliverylink: deliverylink,
    available: available,

  };

  try {
    const newLocation = new joyuSchemas.JoyuLocation(locationData);
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
});

joyu.put("/joyu/locations/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const updatedLocation = await joyuSchemas.JoyuLocation.findByIdAndUpdate(
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
});

joyu.delete("/joyu/locations/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }

  try {
    const deletedLocation = await joyuSchemas.JoyuLocation.findByIdAndDelete(
      id
    );
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
});

joyu.get("/joyu/locations/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  }
  try {
    const location = await joyuSchemas.JoyuLocation.findById(id);
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

joyu.get("/joyu/locationframe", async (req, res) => {
  const LocationFrame = joyuSchemas.JoyuLocationFrame;
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
// Set up multer for parsing form data
const LocationFrame = joyuSchemas.JoyuLocationFrame;
const storage = multer.memoryStorage(); // or you can use diskStorage if you want to save files to disk
const upload = multer({ storage });

joyu.put("/joyu/locationframe/:id", upload.none(), async (req, res) => {
  const { id } = req.params;

  try {
    const updatedData = {
      src: req.body.src,
    };

    const locationFrame = await LocationFrame.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!locationFrame) {
      return res.status(404).json({ message: "LocationFrame not found" });
    }

    res.json(locationFrame);
  } catch (err) {
    res.status(500).json({
      message: "Error updating LocationFrame",
      error: err.message,
    });
  }
});

joyu.get("/joyu/customer", async (req, res) => {
  const JoyuUser = joyuSchemas.JoyuUser;
  try {
    const userData = await JoyuUser.find();
    const emails = userData.map((user) => user.email);
    // console.log(emails);
    res.json(userData);
  } catch (err) {
    res.status(500).json({
      message: "User not found",
      error: err.message,
    });
  }
});

joyu.post("/joyu/customer", async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
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

joyu.delete("/joyu/customer/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID parameter is required",
    });
  } else {
    try {
      const deletedUser = await joyuSchemas.JoyuUser.findByIdAndDelete(id);
      if (deletedUser) {
        res.status(200).json({
          success: true,
          message: "User deleted successfully",
          data: deletedUser,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No user found with the given ID",
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
  }
});

// Middleware to parse form data
joyu.use(express.urlencoded({ extended: true }));

//#region Category
const Category = joyuSchemas.JoyuCategory;

// Create a new category
joyu.post("/joyu/categories", async (req, res) => {
  const { name } = req.body;
  // console.log(req.body);

  try {
    const newCategory = new Category({ name });
    const savedCategory = await newCategory.save();
    res
      .status(201)
      .json({ message: "Category added successfully", data: savedCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Category not added", error: error.message });
  }
});

// Get all categories
joyu.get("/joyu/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res
      .status(200)
      .json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});
// Get category by ID and its related products
joyu.get("/joyu/categories/:categoryId", async (req, res) => {
  const { categoryId } = req.params;

  try {
    // Find the category by ID
    const category = await Category.findById(categoryId);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    // Find all products related to this category
    const products = await Product.find({ categoryID: categoryId });

    // Return the category and its related products
    res
      .status(200)
      .json({ success: true, category: category, products: products });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

// Update category
joyu.put("/joyu/categories/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  const updateData = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updateData,
      { new: true }
    );
    if (!updatedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

// Delete category and related products
joyu.delete("/joyu/categories/:categoryId", async (req, res) => {
  const { categoryId } = req.params;

  try {
    // Step 1: Find all products related to the category
    const productsToDelete = await Product.find({ categoryID: categoryId });

    // Logging products found before deletion
    // console.log(`Products found for deletion in category ${categoryId}:`, productsToDelete);
    // console.log(productsToDelete);
    const imagetodelete = productsToDelete.map((product) => {
      const validimagetodelete = product.image.replace(/%20/g, " ");
      console.log(validimagetodelete);
      deleteFileJoyu(validimagetodelete, (err) => {
        if (err) {
          console.error("Error deleting picture:", err);
          // Consider how you want to handle partial deletion failures
        }
      });
    });

    // // Step 2: Delete all products related to the category
    const deletedProducts = await Product.deleteMany({
      categoryID: categoryId,
    });

    // // Step 3: Delete the category
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category and related products deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

// Endpoint to get all categories and their products
joyu.get("/joyu/menu", async (req, res) => {
  try {
    // Step 1: Get all categories
    const categories = await joyuSchemas.JoyuCategory.find();

    // Step 2: Get all products and populate the category information
    const products = await joyuSchemas.JoyuProduct.find().populate(
      "categoryID"
    );

    // Step 3: Create a map to store categories and their products
    const menu = categories.map((category) => {
      return {
        category: category.name,
        products: products.filter(
          (product) =>
            product.categoryID._id.toString() === category._id.toString()
        ),
      };
    });

    // Step 4: Send the response
    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

//#end region

//#region Product
const Product = joyuSchemas.JoyuProduct;

// Create a new product
joyu.post("/joyu/products", uploadJoyu.single("image"), async (req, res) => {
  try {
    // console.log(req);
    const { name, price, categoryID, description } = req.body;
    const img = req.file ? req.file.filename : null;
    const image = img.replace(/ /g, "%20");
    const product = new Product({
      name,
      price,
      image,
      categoryID,
      description,
    });
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

// Get all products
joyu.get("/joyu/products", async (req, res) => {
  try {
    const products = await Product.find().populate("categoryID", "name");
    res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

// Get product by ID
joyu.get("/joyu/products/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    // Find the product by ID and populate the categoryID field with the category name
    const product = await Product.findById(productId).populate(
      "categoryID",
      "name"
    );

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

joyu.put(
  "/joyu/products/:productId",
  uploadJoyu.single("image"),
  async (req, res) => {
    const { productId } = req.params;
    const { name, price, description, categoryID } = req.body;
    const updateData = { name, price, description, categoryID };

    try {
      const existingProduct = await Product.findById(productId);

      if (!existingProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      if (req.file) {
        const imagePath = req.file.filename.replace(/ /g, "%20");
        updateData.image = imagePath;

        const imagetodelete = existingProduct.image.replace(/%20/g, " ");

        deleteFileJoyu(imagetodelete, (err) => {
          if (err) {
            console.error("Error deleting previous image:", err);
          }
        });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        updateData,
        { new: true }
      );

      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  }
);

// Delete product
joyu.delete("/joyu/products/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    const validimagepath = deletedProduct.image.replace(/%20/g, " ");
    deleteFileJoyu(validimagepath, (err) => {
      if (err) {
        console.error("Error deleting detail picture:", err);
        // Consider how you want to handle partial deletion failures
      }
    });
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

//#end region
const Banner = joyuSchemas.JoyuBanner;
// Create a new banner
joyu.post("/joyu/banner", uploadJoyu.single("image"), async (req, res) => {
  // console.log(req.body);
  try {
    const { bannerType } = req.body;
    console.log(bannerType);
    const img = req.file ? req.file.filename : null;
    const image = img.replace(/ /g, "%20");
    const banner = new Banner({ image, bannerType });
    await banner.save();
    res.status(201).json({ success: true, data: banner });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

joyu.put(
  "/joyu/banner/:bannerID",
  uploadJoyu.single("image"),
  async (req, res) => {
    const { bannerID } = req.params;
    // console.log(req);
    const img = req.file.filename;
    const image = img.replace(/ /g, "%20");
    const updateData = { image };
    // console.log(updateData);

    try {
      // Find the existing product by ID
      const existingBanner = await Banner.findById(bannerID);

      if (!existingBanner) {
        return res
          .status(404)
          .json({ success: false, message: "Banner not found" });
      }

      // Log the existing product data
      // console.log(existingBanner);
      const imgtodelete = existingBanner.image;
      const imagetodelete = imgtodelete.replace(/%20/g, " ");
      deleteFileJoyu(imagetodelete, (err) => {
        if (err) {
          console.error("Error deleting detail picture:", err);
          // Consider how you want to handle partial deletion failures
        }
      });

      // Update the product
      const updatedBanner = await Banner.findByIdAndUpdate(
        bannerID,
        updateData,
        { new: true }
      );

      res.status(200).json({ success: true, data: updatedBanner });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  }
);

// Get all banners
joyu.get("/joyu/banner", async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json({ success: true, data: banners });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});
joyu.post("/joyu/sendemail", async (req, res) => {
  const JoyuUser = joyuSchemas.JoyuUser;
  const data = req.body; // Extract emailData from the request body

  console.log(data);

  try {
    const userData = await JoyuUser.find();
    const emails = userData.map((user) => user.email);
    // console.log('Sending emails to:', emails);

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "joyutea@gmail.com", // Replace with your email
        pass: "wixz iswj yodr utjw", // Replace with your app-specific password
      },
    });

    // Send emails to all users
    for (const email of emails) {
      const mailOptions = {
        from: "Joyu teacoffee : joyutea@gmail.com", // Sender address
        to: email, // List of receivers
        subject: data.subject, // Subject line
        // text: `Plain text version of the message: ${emailData}`, // Plain text body
        html: `<p>Content: ${data.emailData}</p>`, // HTML body
      };

      console.log(`Sending email to ${email}...`);
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${email}`);
    }

    res.json({
      success: true,
      message: "Emails sent successfully",
      data: userData,
    });
  } catch (err) {
    console.error("Error sending emails:", err);
    res.status(500).json({
      message: "Failed to send emails",
      error: err.message,
    });
  }
});

//Send email Franshising information
joyu.post("/api/sendEmailFranchising", (req, res) => {
  const formData = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "joyutea@gmail.com",
      pass: "wixz iswj yodr utjw",
    },
  });

  // Format the email body as HTML
  const emailHTML = `
    <h2>New Franchise Inquiry</h2>
    <table >
      <tr>
        <td><strong>First Name:</strong></td>
        <td>${formData.firstName}</td>
      </tr>
      <tr>
        <td><strong>Last Name:</strong></td>
        <td>${formData.lastName}</td>
      </tr>
      <tr>
        <td><strong>Address:</strong></td>
        <td>${formData.address}</td>
      </tr>
      <tr>
        <td><strong>Country:</strong></td>
        <td>${formData.country}</td>
      </tr>
      <tr>
        <td><strong>State/Province:</strong></td>
        <td>${formData.stateProvince}</td>
      </tr>
      <tr>
        <td><strong>City:</strong></td>
        <td>${formData.city}</td>
      </tr>
      <tr>
        <td><strong>zip Postal Code:</strong></td>
        <td>${formData.zipPostalCode}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>${formData.email}</td>
      </tr>
      <tr>
        <td><strong>Mobile:</strong></td>
        <td>${formData.mobile}</td>
      </tr>
      <tr>
        <td><strong>Business Background:</strong></td>
        <td>${formData.businessBackground}</td>
      </tr>
      <tr>
        <td><strong>Net Worth:</strong></td>
        <td>${formData.netWorth}</td>
      </tr>
      <tr>
        <td><strong>Cash Available:</strong></td>
        <td>${formData.cashAvailable}</td>
      </tr>
    </table>
  `;

  const mailOptions = {
    from: "joyutea@gmail.com",
    to: "joyutea@gmail.com",
    subject: "New Franchise Inquiry",
    html: emailHTML,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email", details: error.message });
    }
    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ message: "Email sent successfully", info: info.response });
  });
});
module.exports = joyu;

// send email Catering form

joyu.post("/api/sendEmailCatering", (req, res) => {
  const formData = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "joyutea@gmail.com",
      pass: "wixz iswj yodr utjw",
    },
  });

  // Format the email body as HTML
  const emailHTML = `
    <h2>New Catering </h2>
    <table >
      <tr>
        <td><strong>Name: </strong></td>
        <td>${formData.name}</td>
      </tr>
      <tr>
        <td><strong>Phone number: </strong></td>
        <td>${formData.phone}</td>
      </tr>
      <tr>
        <td><strong>Email: </strong></td>
        <td>${formData.email}</td>
      </tr>
      <tr>
        <td><strong>Dat: e</strong></td>
        <td>${formData.date}</td>
      </tr>
      <tr>
        <td><strong>Type: </strong></td>
        <td>${formData.type}</td>
      </tr>
      <tr>
        <td><strong>Location: </strong></td>
        <td>${formData.location}</td>
      </tr>
      <tr>
        <td><strong>Guest count: </strong></td>
        <td>${formData.guestCount}</td>
      </tr>
      <tr>
        <td><strong>Event detail: </strong></td>
        <td>${formData.eventDetail}</td>
      </tr>
      <tr>
        <td><strong>Special request: </strong></td>
        <td>${formData.specicalRequest}</td>
      </tr>
      
    </table>
  `;

  const mailOptions = {
    from: "joyutea@gmail.com",
    to: "joyutea@gmail.com",
    subject: "New Catering Inquiry",
    html: emailHTML,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email", details: error.message });
    }
    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ message: "Email sent successfully", info: info.response });
  });
});
module.exports = joyu;
