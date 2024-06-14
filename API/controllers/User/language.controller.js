const Language = require("../../models/User/language.schema");

const getAll = async (req, res) => {
  const all = await Language.find();
  res.json(all);
};

const getLanguageByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const lang = await Language.findOne({ value });
    res.json(lang);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getLanguageById = async (req, res) => {
  const { _id } = req.body;
  try {
    const lang = await Language.findOne({ _id });
    res.json(lang);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addLanguage = async (req, res) => {
  const { value, icon } = req.body;
  try {
    const isAlreadyExist = await Language.findOne({ value });
    if (isAlreadyExist) {
      res.status(500).json({ error: "Language already exist" });
      return;
    }
    const newLanguage = new Language({ value, icon });
    await newLanguage.save();
    res.json(newLanguage);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteLanguageByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const isAlreadyExist = await Language.findOneAndDelete({ value });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Language not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteLanguageById = async (req, res) => {
  const { _id } = req.body;
  try {
    const isAlreadyExist = await Language.findOneAndDelete({ _id });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Language not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateLanguage = async (req, res) => {
  const { value, icon, reference } = req.body;
  try {
    const IsNewExist = await Language.findOne({ value });
    const IsOldExist = await Language.findOne({ value: reference });
    if (IsNewExist && IsOldExist && IsNewExist._id != IsOldExist._id) {
      res
        .status(500)
        .json({
          error: "Can't change by another language name that already exist.",
        });
      return;
    }

    const isAlreadyExist = await Language.findOneAndUpdate(
      { value: reference },
      { value, icon }
    );
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Language not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAll,
  addLanguage,
  deleteLanguageByValue,
  deleteLanguageById,
  updateLanguage,
  getLanguageByValue,
  getLanguageById,
};
