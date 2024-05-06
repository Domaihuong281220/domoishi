const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
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

const User = mongoose.model('User', userSchema, 'users');
const News = mongoose.model('News', newsSchema, 'news');
const Careers = mongoose.model('Careers', careersSchema, 'careers');
const mySchemas = { 'User': User, 'News': News, 'Careers' : Careers};

module.exports = mySchemas;