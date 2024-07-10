/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"], // Custom error message
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true, // Ensures username is unique across the collection
  },
  email: {
    type: String,
    // email is optional in this setup; add required if it should be mandatory
  },
  phonenumber: {
    type: String,
    required: [true, "Phonenumber is required"],
    unique: true, // Ensures phonenumber is unique across the collection
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
  },
});

const newsSchema = new Schema(
  {
    title: String,
    shortdescription: String,
    longdescription: String,
    detailpic: String,
    filename: String,
    titlepic: String,
  },
  { timestamps: true }
);

const careersSchema = new Schema({
  position: String,
  description: String,
  responsibility: String,
  availability: String,
  address: String,
  image: String,
});

const careerspositionaddressSchema = new Schema({
  address: String,
  availability: Boolean,
  careerId: {
    type: Schema.Types.ObjectId,
    ref: "JoyuCareers",
    required: true,
  },
});

const metatagSchema = new Schema({
  page: String,
  path: String,
  title: String,
  name: String,
  content: String,
  property: String,
});

const hoursSchema = new Schema(
  {
    start: {
      type: String,
      required: false,
    },
    end: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);

const locationSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  pickuplink: {
    type: String,
    require: true,
  },
  deliverylink: {
    type: String,
    require: true,
  },
  available: {
    type: Boolean,
    require: true,
  },
  hours: {
    monday: hoursSchema,
    tuesday: hoursSchema,
    wednesday: hoursSchema,
    thursday: hoursSchema,
    friday: hoursSchema,
    saturday: hoursSchema,
    sunday: hoursSchema,
  },
});

const locationFrame = new Schema({
  src: {
    type: String,
    require: true,
  },
});

const joyuUserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    // email is optional in this setup; add required if it should be mandatory
  },
  image: { type: String },
});

const CategorySchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
});

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 50 },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    image: { type: String },
    categoryID: {
      type: Schema.Types.ObjectId,
      ref: "JoyuCategory",
      required: true,
    },
  },
  { timestamps: true }
);

const BannerSchema = new Schema({
  bannerType: { type: String, required: true },
  image: { type: String, require: true },
});

const Admin = mongoose.model("Admin", adminSchema, "joyuadmin");
const JoyuNews = mongoose.model("JoyuNews", newsSchema, "joyunews");
const JoyuMetaTag = mongoose.model(
  "JoyuMetaTag",
  metatagSchema,
  "joyumetatags"
);
const JoyuProduct = mongoose.model("JoyuProduct", ProductSchema, "joyuproduct");
const JoyuLocation = mongoose.model(
  "JoyuLocation",
  locationSchema,
  "joyulocation"
);
const JoyuLocationFrame = mongoose.model(
  "JoyuLocationFrame",
  locationFrame,
  "joyulocationframe"
);
const JoyuCareers = mongoose.model("JoyuCareers", careersSchema, "joyucareers");

const JoyuCareersPositionAddress = mongoose.model(
  "JoyuCareersPositionAddress",
  careerspositionaddressSchema,
  "JoyuCareersPositionAddress"
);

const JoyuUser = mongoose.model(
  "JoyuUser",
  joyuUserSchema,
  "joyucustomeremails"
);
const JoyuCategory = mongoose.model(
  "JoyuCategory",
  CategorySchema,
  "joyuCategory"
);
const JoyuBanner = mongoose.model("JoyuBanner", BannerSchema, "joyubanner");
const joyuSchemas = {
  JoyuUser: JoyuUser,
  Admin: Admin,
  JoyuNews: JoyuNews,
  JoyuMetaTag: JoyuMetaTag,
  JoyuProduct: JoyuProduct,
  JoyuLocation: JoyuLocation,
  JoyuLocationFrame: JoyuLocationFrame,
  JoyuCareers: JoyuCareers,
  JoyuCategory: JoyuCategory,
  JoyuBanner: JoyuBanner,
  JoyuCareersPositionAddress: JoyuCareersPositionAddress,
};

module.exports = joyuSchemas;
