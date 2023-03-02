//environment variables 
require('dotenv').config()

const express = require('express');
const chitterRoutes = require('./routes/peeps')

// mongoose
const mongoose = require('mongoose')

// Set up mongoose connection
mongoose.set('strictQuery', false);
const mongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ds0ycgm.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;


// express app
const app = express();

// middleware
// logging requests as they come in
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes 

app.use(chitterRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port 4000");
})