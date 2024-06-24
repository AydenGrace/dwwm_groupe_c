const mongoose = require("mongoose");

const TrophySchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

module.exports = mongoose.model("USER_TROPHIES", TrophySchema);
