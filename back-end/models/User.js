const { Schema, Model, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  mobile: { type: Number },
  country: { type: String },
  gender: { type: String, enum: ["Male", "Female", "unspecified"] },
});

const User = model("User", UserSchema);
module.exports = User;
