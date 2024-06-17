const Trophy = require("../../models/User/trophy.schema");

const getAll = async (req, res) => {
  const all = await Trophy.find();
  res.json(all);
};

const getTrophyByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const trophy = await Trophy.findOne({ value });
    res.json(trophy);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getTrophyById = async (req, res) => {
  const { _id } = req.body;
  try {
    const trophy = await Trophy.findOne({ _id });
    res.json(trophy);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrophy = async (req, res) => {
  // console.log(req.body);
  const { value, icon, description } = req.body;
  try {
    const isAlreadyExist = await Trophy.findOne({ value });
    if (isAlreadyExist) {
      res.status(500).json({ error: "Trophy already exist" });
      return;
    }
    const newTrophy = new Trophy({ value, icon, description });
    await newTrophy.save();
    res.json(newTrophy);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteTrophyByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const isAlreadyExist = await Trophy.findOneAndDelete({ value });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Trophy not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteTrophyById = async (req, res) => {
  const { _id } = req.body;
  try {
    const isAlreadyExist = await Trophy.findOneAndDelete({ _id });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Trophy not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTrophy = async (req, res) => {
  const { value, icon, description, reference } = req.body;
  try {
    const IsNewExist = await Trophy.findOne({ value });
    const IsOldExist = await Trophy.findOne({ value: reference });
    if (IsNewExist && IsOldExist && !IsNewExist._id.equals(IsOldExist._id)) {
      res.status(500).json({
        error: "Can't change by another trophy name that already exist.",
      });
      return;
    }

    const isAlreadyExist = await Trophy.findOneAndUpdate(
      { value: reference },
      { value, icon, description }
    );
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Trophy not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAll,
  addTrophy,
  deleteTrophyByValue,
  deleteTrophyById,
  updateTrophy,
  getTrophyByValue,
  getTrophyById,
};
