const mongoose = require("mongoose");

const giftcardSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    pourcentage: { type: Number, required: true },
    used: { type: Boolean },
    used_by: { type: mongoose.Schema.Types.ObjectId, ref: "USER" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GIFTCARD", giftcardSchema);
