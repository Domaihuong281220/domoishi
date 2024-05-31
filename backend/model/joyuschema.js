const mongoose = require('mongoose');
const Schema = mongoose.Schema



const joyuUserSchema = new Schema({
    email: {
        type: String,
        // email is optional in this setup; add required if it should be mandatory
    },
});




const JoyuUser = mongoose.model('JoyuUser', joyuUserSchema, 'joyucustomeremails');
const joyuSchemas = { 'JoyuUser': JoyuUser };

module.exports = joyuSchemas;