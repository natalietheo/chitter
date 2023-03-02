const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    confirmedOrder: {type: Array},
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  });
  
  // Export model
  const User = mongoose.model("User", UserSchema);
  
  module.exports = Baker;