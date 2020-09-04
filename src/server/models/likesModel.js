const mongoose = require('mongoose')

//import the likes schema
const likesSchema = require('./schemas/likes')

module.exports = mongoose.model('Likes', likesSchema)