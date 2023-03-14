const Clucks = require("../models/clucksModel");

const ClucksController = {

// get all clucks
Index: (req, res) => {
    Cluck.find(async (err, clucks, username) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ username: username, clucks: clucks });
    });
  },
// get a single cluck

// create a cluck
Create: (req, res) => {
    const cluckPost = req.body.message;
    const username = req.body.username;
    const userID = req.body.userID;
    const cluckID = req.body.cluckID
    const cluck = new Clucks({
      cluckPost,
      username,
      userID,
      cluckID
    });

    cluck.save(async (err) => {
      if (err) {
        console.log('error');
        throw err;
      }
      else {
        console.log("no error here");
      }
     console.log("no error")
      res.status(201).json({ message: "OK" });
    });
  },
  


// delete a cluck

// update a cluck
}
module.exports = ClucksController