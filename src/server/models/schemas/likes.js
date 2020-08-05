const mongoose = require('mongoose')

const Schema = mongoose.Schema

const likes = new Schema({
    like: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = likes;