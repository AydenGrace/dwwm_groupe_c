const Reservation = require("../../models/Cottage/reservation.schema");

const getAll = async (req, res) => {
  const all = await Reservation.find();
  res.json(all);
};

module.exports = { getAll };
