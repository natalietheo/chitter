

const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UsersSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  username: { type: String, unique: true },
});

// UserSchema.statics.signup = async function(email, password, username) {

//   const exists = await this.findOne({email})
//   const usernameExists = await this.findOne({username})

//   if (exists) {
//     throw Error('Email already in use')
//   }  else if (usernameExists) {
//     throw Error('Username already in use')
//   }

//   const user = await this.create({email, password, username})

//   return user
// };

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;

