const mongoose = require('mongoose');
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']  // Custom error message
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true  // Ensures username is unique across the collection
    },
    email: {
        type: String,
        // email is optional in this setup; add required if it should be mandatory
    },
    phonenumber: {
        type: String,
        required: [true, 'Phonenumber is required'],
        unique: true  // Ensures phonenumber is unique across the collection
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    }
});

const newsSchema = new Schema({
    title: String,
    shortdescription: String,
    longdescription: String,
    detailpic: String,
    filename: String,
    titlepic: String,
});

const careersSchema = new Schema({
    position: String,
    description: String,
    availability: String,
    linkform: String,
});

const metatagSchema = new Schema({
    path: String,
    title: String,
    name: String,
    content: String,
    property: String,
})

const productSchema = new Schema({
    productCode: {
        type: String,
        require: true
    },
    productName: {
        unique: true,
        type: String,
        require: true
    },
    productDescription: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true,
        require: true
    },
    imagePath: {
        type: String,
        trim: true
    }
});

const locationSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    website: {
        type: String,
        require: true
    }
});

const locationFrame = new Schema({
    src: {
        type: String,
        require: true
    }
});


const joyuUserSchema = new Schema({
    email: {
        type: String,
        // email is optional in this setup; add required if it should be mandatory
    },
});



const Admin = mongoose.model('Admin', adminSchema, 'joyuadmin');
const JoyuNews = mongoose.model('JoyuNews', newsSchema, 'joyunews');
const JoyuMetaTag = mongoose.model('JoyuMetaTag', metatagSchema, 'joyunmetatags');
const JoyuProduct = mongoose.model('JoyuProduct', productSchema, 'joyunproduct');
const JoyuLocation = mongoose.model('JoyuLocation', locationSchema, 'joyunlocation');
const JoyuLocationFrame = mongoose.model('JoyuLocationFrame', locationFrame, 'joyunlocationframe');
const JoyuCareers = mongoose.model('JoyuCareers', careersSchema, 'joyuncareers');
const JoyuUser = mongoose.model('JoyuUser', joyuUserSchema, 'joyucustomeremails');
const joyuSchemas = { 'JoyuUser': JoyuUser, 'Admin':Admin, 'JoyuNews':JoyuNews, 'JoyuMetaTag':JoyuMetaTag, 'JoyuProduct':JoyuProduct, 'JoyuLocation': JoyuLocation, 'JoyuLocationFrame':JoyuLocationFrame, 'JoyuCareers':JoyuCareers };

module.exports = joyuSchemas;