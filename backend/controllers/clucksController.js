const Clucks = require("../models/clucksModel");

const ClucksController = {

// get all clucks
Index: (req, res) => {
    Cluck.find(async (err, posts, user_id) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ user_id: user_id, posts: posts });
    });
  },
// get a single cluck

// create a cluck
Create: (req, res) => {
    const message = req.body.message;
    const user_id = req.body.username;
    const postObject = {
      cluck,
      username,
    };

    const cluck = new Clucks(postObject);

    cluck.save(async (err) => {
      if (err) {
        throw err;
      }
      // console.log(req.user_id)
      res.status(201).json({ message: "OK" });
    });
  },


// delete a cluck

// update a cluck
}
module.exports = ClucksController