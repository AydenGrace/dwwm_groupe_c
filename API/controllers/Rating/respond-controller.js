const Respond = require("../../models/Rating/respond.schema");
const User = require("../../models/User/user.schema");
const Rate = require("../../models/Rating/rate.schema");

const getAll = async (req, res) => {
  const all = await Respond.find();
  res.json(all);
};

const getByRate = async (req, res) => {
  const { origin } = req.body;
  const all = await Respond.find({ origin })
    .populate("creator")
    .populate("origin");
  res.json(all);
};

const getByCreator = async (req, res) => {
  const { creator } = req.body;
  const all = await Respond.find({ creator })
    .populate("creator")
    .populate("origin");
  res.json(all);
};

const getById = async (req, res) => {
  const { _id } = req.body;
  const all = await Respond.findOne({ _id })
    .populate("creator")
    .populate("origin");
  res.json(all);
};

const addRespond = async (req, res) => {
  console.log(req.body);
  const { comment, origin, creator } = req.body;
  try {
    const isCreatorExist = await User.findOne({
      _id: creator,
    });
    if (!isCreatorExist) {
      res.status(500).json({ message: "Creator not found" });
      return;
    }
    const isOriginExist = await Rate.findOne({
      _id: origin,
    });
    if (!isOriginExist) {
      res.status(500).json({ message: "Original rating not found" });
      return;
    }
    const isExist = await Respond.findOne({ $and: [{ creator }, { origin }] });
    if (isExist) {
      res
        .status(500)
        .json({ message: "Your respond already exist for this rating" });
      return;
    }
    const newRespond = new Respond({
      comment,
      origin,
      creator,
    });
    await newRespond.save();
    res.json(newRespond);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateRespond = async (req, res) => {
  const { reference, comment } = req.body;
  try {
    const isExist = await Respond.findOne({ _id: reference });
    if (!isExist) {
      res.status(500).json({ message: "Respond not Found" });
      return;
    }
    const newrespond = await Respond.findOneAndUpdate(
      { _id: reference },
      { comment }
    );
    res.json(newrespond);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteRespond = async (req, res) => {
  const { _id } = req.body;
  try {
    const isExist = await Respond.findOne({ _id });
    if (!isExist) {
      res.status(500).json({ message: "Respond not Found" });
      return;
    }
    const newRespond = await Respond.findOneAndDelete({ _id });
    res.json(newRespond);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  getByRate,
  getByCreator,
  getById,
  addRespond,
  updateRespond,
  deleteRespond,
};
