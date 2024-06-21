const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    cottage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "COTTAGE",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "USER", required: true },
    nb_person: { type: Number, required: true },
    start_at: { type: Date, required: true },
    end_at: { type: Date, required: true },
    nb_days: { type: Number },
    total_price: { type: Number, required: true },
    is_Validated: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("COTTAGE_RESERVATION", reservationSchema);
