const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar_uri: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Uploads%2FDefault%2Favatar%2Fpexels-andyhvu-3217911.webp?alt=media&token=8bfd9a64-4845-4c03-997a-f5a756013f81",
    },
    languages: [
      { type: mongoose.Schema.Types.ObjectId, ref: "USER_LANGUAGES" },
    ],
    interests: [
      { type: mongoose.Schema.Types.ObjectId, ref: "USER_INTERESTS" },
    ],
    trophies: [{ type: mongoose.Schema.Types.ObjectId, ref: "USER_TROPHIES" }],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "COTTAGE" }],
    token: String,
    token_password: String,
    delete_token: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("USER", userSchema);
