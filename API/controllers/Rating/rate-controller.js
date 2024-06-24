const Rate = require("../../models/Rating/rate.schema");
const User = require("../../models/User/user.schema");
const Cottage = require("../../models/Cottage/cottage.schema");

const getAll = async (req, res) => {
  const all = await Rate.find().populate("creator").populate("cottage");
  res.json(all);
};

const getByCottage = async (req, res) => {
  const { cottage } = req.body;
  const all = await Rate.find({ cottage })
    .populate("creator")
    .populate("cottage");
  res.json(all);
};

const getByCreator = async (req, res) => {
  const { creator } = req.body;
  const all = await Rate.find({ creator })
    .populate("creator")
    .populate("cottage");
  res.json(all);
};

const getById = async (req, res) => {
  const { _id } = req.body;
  const all = await Rate.findOne({ _id })
    .populate("creator")
    .populate("cottage");
  res.json(all);
};

const addRate = async (req, res) => {
  const { comment, rating, creator, cottage } = req.body;
  try {
    const isCreatorExist = await User.findOne({
      _id: creator,
    });
    if (!isCreatorExist) {
      res.status(500).json({ message: "Creator not found" });
      return;
    }
    const isCottageExist = await Cottage.findOne({
      _id: cottage,
    });
    if (!isCottageExist) {
      res.status(500).json({ message: "Cottage not found" });
      return;
    }
    const isExist = await Rate.findOne({ $and: [{ creator }, { cottage }] });
    if (isExist) {
      res
        .status(500)
        .json({ message: "Your rating already exist for this cottage" });
      return;
    }
    const newRate = new Rate({
      comment,
      rating,
      creator,
      cottage,
    });
    await newRate.save();
    res.json(newRate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateRate = async (req, res) => {
  const { reference, comment, rating } = req.body;
  try {
    const isExist = await Rate.findOne({ _id: reference });
    if (!isExist) {
      res.status(500).json({ message: "Rating not Found" });
      return;
    }
    const newRate = await Rate.findOneAndUpdate(
      { _id: reference },
      { comment, rating }
    );
    res.json(newRate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteRate = async (req, res) => {
  const { _id } = req.body;
  try {
    const isExist = await Rate.findOne({ _id });
    if (!isExist) {
      res.status(500).json({ message: "Rating not Found" });
      return;
    }
    const newRate = await Rate.findOneAndDelete({ _id });
    res.json(newRate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  deleteRate,
  updateRate,
  addRate,
  getById,
  getByCreator,
  getByCottage,
};
