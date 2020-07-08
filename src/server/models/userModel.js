const mongoose = require('mongoose');
//import the UserSchema
const UserSchema = require('./schemas/user');

module.exports = mongoose.model('User',UserSchema);