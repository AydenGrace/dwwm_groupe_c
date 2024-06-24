const mongoose = require("mongoose");

const cottageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    price_per_night: { type: Number, required: true },
    vitual_tour_url: { type: String },
    nb_max_person: { type: Number, required: true },
    images: [{ type: String }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "COTTAGE_TAG" }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USER",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("COTTAGE", cottageSchema);
