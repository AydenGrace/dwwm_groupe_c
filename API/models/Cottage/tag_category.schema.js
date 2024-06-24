const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("COTTAGE_TAG_CATEGORIES", categorySchema);
