const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
});

const newsSchema = new Schema({
    filename: String,
    path: String,
});

const User = mongoose.model('User', userSchema, 'users');
const News = mongoose.model('News', newsSchema, 'news');
const mySchemas = { 'User': User, 'News': News };

module.exports = mySchemas;