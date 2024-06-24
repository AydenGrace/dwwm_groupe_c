const Reservation = require("../../models/Cottage/reservation.schema");

const getAll = async (req, res) => {
  const all = await Reservation.find()
    .populate("cottage")
    .populate("user")
    .populate("reduction");
  res.json(all);
};

const addReservation = async (req, res) => {
  console.log(req.body);
  const {
    cottage,
    user,
    nb_person,
    start_at,
    end_at,
    nb_days,
    total_price,
    is_validated,
    reduction,
  } = req.body;
  try {
    const newReservation = new Reservation({
      cottage,
      user,
      nb_person,
      start_at,
      end_at,
      nb_days,
      total_price,
      is_validated,
      reduction,
    });
    await newReservation.save();
    res.json(newReservation);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getByCottage = async (req, res) => {
  const { cottage } = req.body;
  try {
    const cott = await Reservation.find({ cottage })
      .populate("cottage")
      .populate("user")
      .populate("reduction");
    res.json(cott);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getByUser = async (req, res) => {
  const { user } = req.body;
  try {
    const cott = await Reservation.find({ user })
      .populate("cottage")
      .populate("user")
      .populate("reduction");
    res.json(cott);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { _id } = req.body;
  try {
    const cott = await Reservation.findOne({ _id })
      .populate("cottage")
      .populate("user")
      .populate("reduction");
    res.json(cott);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateReservation = async (req, res) => {
  console.log(req.body);
  const {
    reference,
    name,
    address,
    overview,
    description,
    price_per_night,
    vitual_tour_url,
    nb_max_person,
    images,
    tags,
  } = req.body;

  try {
    const isExist = await Reservation.findOne({ _id: reference });
    if (!isExist) {
      res.status(500).json({ message: "Reservation not found" });
    }
    const newReservation = await Reservation.findOneAndUpdate(
      { _id: reference },
      {
        name,
        address,
        overview,
        description,
        price_per_night,
        vitual_tour_url,
        nb_max_person,
        images,
        tags,
      }
    );
    res.json(newReservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteReservationById = async (req, res) => {
  const { _id } = req.body;

  try {
    const isExist = await Reservation.findOneAndDelete({ _id });
    if (!isExist) {
      res.status(500).json({ message: "Reservation Not Found" });
      return;
    }
    res.json(isExist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  addReservation,
  getByCottage,
  getByUser,
  getById,
  updateReservation,
  deleteReservationById,
};
