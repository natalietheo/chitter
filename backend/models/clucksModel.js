const mongoose = require('mongoose');

const Schema = mongoose.Schema

const clucksSchema = new Schema({
    userID: {
        type: String,
        // required: true
    },
    username: {
        type: String, 
        // required: true
    },
    cluckPost: {
        type: String,
        // required: true
    },
    cluckID: {
        type: String, 
        // required: true
    },
   }, { timestamps: true }
)

const Clucks = mongoose.model("clucks", clucksSchema)

module.exports = Clucks
