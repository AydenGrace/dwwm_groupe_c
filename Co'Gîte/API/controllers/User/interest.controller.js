const Interest = require("../../models/User/interest.schema");

const getAll = async (req, res) => {
  const all = await Interest.find();
  res.json(all);
};

const getInterestByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const intere = await Interest.findOne({ value });
    res.json(intere);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getInterestById = async (req, res) => {
  const { _id } = req.body;
  try {
    const intere = await Interest.findOne({ _id });
    res.json(intere);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addInterest = async (req, res) => {
  const { value, icon } = req.body;
  try {
    const isAlreadyExist = await Interest.findOne({ value });
    if (isAlreadyExist) {
      res.status(500).json({ error: "Interest already exist" });
      return;
    }
    const newInterest = new Interest({ value, icon });
    await newInterest.save();
    res.json(newInterest);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteInterestByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const isAlreadyExist = await Interest.findOneAndDelete({ value });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Interest not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteInterestById = async (req, res) => {
  const { _id } = req.body;
  try {
    const isAlreadyExist = await Interest.findOneAndDelete({ _id });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Interest not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateInterest = async (req, res) => {
  const { value, icon, reference } = req.body;
  try {
    const IsNewExist = await Interest.findOne({ value });
    const IsOldExist = await Interest.findOne({ value: reference });
    if (IsNewExist && IsOldExist && IsNewExist._id != IsOldExist._id) {
      res.status(500).json({
        error: "Can't change by another interest name that already exist.",
      });
      return;
    }

    const isAlreadyExist = await Interest.findOneAndUpdate(
      { value: reference },
      { value, icon }
    );
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Interest not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAll,
  addInterest,
  deleteInterestByValue,
  deleteInterestById,
  updateInterest,
  getInterestByValue,
  getInterestById,
};
