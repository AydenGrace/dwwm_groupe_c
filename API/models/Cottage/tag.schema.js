const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
  is_bool: { type: Boolean },
  value_number: { type: Number },
  value_bool: { type: Boolean },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "COTTAGE_TAG_CATEGORIES",
  },
});

module.exports = mongoose.model("COTTAGE_TAG", tagSchema);
