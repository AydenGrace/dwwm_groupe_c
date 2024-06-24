const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USER",
    },
    cottage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "COTTAGE",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RATE", rateSchema);
