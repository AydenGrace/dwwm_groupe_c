const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar_uri: { type: String },
    languages: [
      { type: mongoose.Schema.Types.ObjectId, ref: "USER_LANGUAGES" },
    ],
    interests: [
      { type: mongoose.Schema.Types.ObjectId, ref: "USER_INTERESTS" },
    ],
    trophies: [{ type: mongoose.Schema.Types.ObjectId, ref: "USER_TROPHIES" }],
    token: String,
    token_password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("USER", userSchema);
