const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
});

module.exports = mongoose.model("USER_LANGUAGES", languageSchema);
