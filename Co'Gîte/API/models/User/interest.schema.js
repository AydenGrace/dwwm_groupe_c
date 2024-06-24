const mongoose = require("mongoose");

const InterestSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
});

module.exports = mongoose.model("USER_INTERESTS", InterestSchema);
