/** @format */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const joyu = require("./routes/joyu");
const mongoose = require("mongoose");
require("dotenv/config");
const methodOverride = require("method-override");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.static("public"));
app.use(express.static("joyupics"));
app.use(cors(corsOptions));
app.use("/", router);
app.use("/", joyu);

const dboptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Corrected the .then() placement
mongoose
  .connect(process.env.DB_URI, dboptions)
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("DB connection failed:", error)); // It's a good practice to handle potential errors as well

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
