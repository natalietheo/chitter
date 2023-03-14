const User = require("../models/user");
// const TokenGenerator = require("../models/token_generator");

const UsersController = {
  //create a new user
  Create: (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const user = new User({email, password, username});

      user.save(async (err) => {
        if (err) {
          console.log('error');
          throw err;
        }
        else {
          console.log("no error here");
        }
        console.log("no error")
        res.status(201).json({ message: "OK" });;
    })
  },


  // find a user
  Find: async (req, res) => {
    try {
      const user = await User.findOne({_id: req.get('User_ID')}, {password: 0})

      // const token = await TokenGenerator.jsonwebtoken(req.get('User_ID'));
      // console.log(token)
      // console.log(req.get('User_ID'))
      // console.log(req.get('User_ID'))
      // res.status(201).json({user: user, token: token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
};

module.exports = UsersController;
