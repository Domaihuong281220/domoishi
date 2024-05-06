const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Since Express 4.16.0, bodyParser is built-in
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*", // Consider specifying domains in production
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", router);

// Connect to MongoDB without deprecated options
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("DB connection failed:", error));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
