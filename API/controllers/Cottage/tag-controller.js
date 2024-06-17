const Tag = require("../../models/Cottage/tag.schema");

const getAll = async (req, res) => {
  const all = await Tag.find().populate("category");
  res.json(all);
};

const getByCategory = async (req, res) => {
  const { category } = req.body;
  const all = await Tag.find({ category }).populate("category");
  res.json(all);
};

const getTagByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const cat = await Tag.findOne({ value });
    res.json(cat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getTagById = async (req, res) => {
  const { _id } = req.body;
  try {
    const cat = await Tag.findOne({ _id });
    res.json(cat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTag = async (req, res) => {
  const { value, icon, category } = req.body;
  try {
    const isAlreadyExist = await Tag.findOne({ value });
    if (isAlreadyExist) {
      res.status(500).json({ error: "Tag already exist" });
      return;
    }
    const newTag = new Tag({ value, icon, category });
    await newTag.save();
    res.json(newTag);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteTagByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const isAlreadyExist = await Tag.findOneAndDelete({ value });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Tag not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteTagById = async (req, res) => {
  const { _id } = req.body;
  try {
    const isAlreadyExist = await Tag.findOneAndDelete({ _id });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Tag not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTag = async (req, res) => {
  const { value, icon, category, reference } = req.body;
  try {
    const IsNewExist = await Tag.findOne({ value });
    const IsOldExist = await Tag.findOne({ value: reference });
    if (IsNewExist && IsOldExist && !IsNewExist._id.equals(IsOldExist._id)) {
      res.status(500).json({
        error: "Can't change by another tag name that already exist.",
      });
      return;
    }

    const isAlreadyExist = await Tag.findOneAndUpdate(
      { value: reference },
      { value, icon, category }
    );
    if (!isAlreadyExist) {
      res.status(500).json({ error: "Tag not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAll,
  addTag,
  deleteTagByValue,
  deleteTagById,
  updateTag,
  getTagByValue,
  getTagById,
  getByCategory,
};
