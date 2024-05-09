const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema({
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
    linkform : String,
});

const metatagSchema = new Schema({
    path: String,
    title: String,
    name: String,
    content: String,
    property: String,
})

const User = mongoose.model('User', userSchema, 'users');
const News = mongoose.model('News', newsSchema, 'news');
const MetaTag = mongoose.model('MetaTag', metatagSchema, 'metatag');

const Careers = mongoose.model('Careers', careersSchema, 'careers');
const mySchemas = { 'User': User, 'News': News, 'Careers' : Careers, 'MetaTag': MetaTag};

module.exports = mySchemas;