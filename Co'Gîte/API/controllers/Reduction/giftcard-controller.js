const GiftCard = require("../../models/Reduction/giftcard.schema");

const getAll = async (req, res) => {
  const all = await GiftCard.find();
  res.json(all);
};

const getByCode = async (req, res) => {
  const { code } = req.body;
  const all = await GiftCard.find({ code });
  res.json(all);
};

const getById = async (req, res) => {
  const { _id } = req.body;
  const all = await GiftCard.find({ _id });
  res.json(all);
};

const addCard = async (req, res) => {
  const { code, value } = req.body;
  try {
    const isExist = await GiftCard.findOne({ code });
    if (isExist) {
      res.status(500).json({ message: "Code already Exist" });
      return;
    }
    const newCard = new GiftCard({
      code,
      value,
      used: false,
    });
    await newCard.save();
    res.json(newCard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const setUsed = async (req, res) => {
  const { code, userId } = req.body;
  try {
    const isExist = await GiftCard.findOne({ code });
    if (!isExist) {
      res.status(500).json({ message: "Code not Found" });
      return;
    }
    if (isExist.used) {
      res.status(500).json({ message: "Code already used" });
      return;
    }
    const newCard = await GiftCard.findOneAndUpdate(
      { code },
      { used: true, used_by: userId }
    );
    res.json(newCard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCard = async (req, res) => {
  const { reference, value } = req.body;
  try {
    const isExist = await GiftCard.findOne({ code: reference });
    if (!isExist) {
      res.status(500).json({ message: "Code not Found" });
      return;
    }
    if (isExist.used) {
      res.status(500).json({ message: "Code already used" });
      return;
    }
    const newCard = await GiftCard.findOneAndUpdate(
      { code: reference },
      { value }
    );
    res.json(newCard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCard = async (req, res) => {
  const { code } = req.body;
  try {
    const isExist = await GiftCard.findOne({ code });
    if (!isExist) {
      res.status(500).json({ message: "Code not Found" });
      return;
    }
    const newCard = await GiftCard.findOneAndDelete({ code });
    res.json(newCard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  addCard,
  setUsed,
  updateCard,
  deleteCard,
  getByCode,
  getById,
};
