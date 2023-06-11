const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide email"],
    },
    phone: {
      type: String,
      required: [true, "Please provide telefone"],
      minlength: 8,
    },
    address: {
      type: String,
      required: [true, "Please provide address"],
    },
  },
  { collection: "User" }
);

module.exports = mongoose.model("User", UserSchema);
