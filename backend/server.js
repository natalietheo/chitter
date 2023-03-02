require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const chitterRoutes = require('./routes/peeps')
const uri = process.env.MONGO_URI
console.log(uri);
const port = process.env.PORT
console.log(port);

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

//connect to DB
mongoose.set("strictQuery", false);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
