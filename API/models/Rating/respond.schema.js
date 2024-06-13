const mongoose = require("mongoose");

const respondSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USER",
    },
    origin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RATE",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RATE_RESPOND", respondSchema);
