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
    nb_bedrooms: { type: Number, required: true, default: 0 },
    nb_beds: { type: Number, required: true, default: 0 },
    nb_bathrooms: { type: Number, required: true, default: 0 },
    images: [{ type: String }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "COTTAGE_TAG" }],
    rating: { type: Number, default: 0 },
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
