const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
});

const User = mongoose.model('User', userSchema, 'users');

const mySchemas = { 'User': User }

module.exports = mySchemas;