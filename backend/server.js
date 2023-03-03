require('dotenv').config()
const express = require('express');
const chitterRoutes = require('./routes/Clucks')
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