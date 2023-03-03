const mongoose = require('mongoose');

const Schema = mongoose.Schema

const clucksSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    cluck: {
        type: String,
        required: true
    },
    cluckID: {
        type: String, 
        required: true
    },
   }, { timestamps: true }
)

module.exports = mongoose.model('Cluck', clucksSchema)