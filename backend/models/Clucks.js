const mongoose = require('mongoose');

const Schema = mongoose.Schema

const clucksSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    cluck: {
        type: String, 
        required: true
    }
    
})