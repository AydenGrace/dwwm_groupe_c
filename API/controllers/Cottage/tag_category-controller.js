const TagCategory = require("../../models/Cottage/tag_category.schema");

const getAllCategories = async (req, res) => {
  const all = await TagCategory.find();
  res.json(all);
};

const getTagCategoryByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const cat = await TagCategory.findOne({ value });
    res.json(cat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getTagCategoryById = async (req, res) => {
  const { _id } = req.body;
  try {
    const cat = await TagCategory.findOne({ _id });
    res.json(cat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTagCategory = async (req, res) => {
  const { value } = req.body;
  try {
    const isAlreadyExist = await TagCategory.findOne({ value });
    if (isAlreadyExist) {
      res.status(500).json({ error: "TagCategory already exist" });
      return;
    }
    const newTagCategory = new TagCategory({ value });
    await newTagCategory.save();
    res.json(newTagCategory);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteTagCategoryByValue = async (req, res) => {
  const { value } = req.body;
  try {
    const isAlreadyExist = await TagCategory.findOneAndDelete({ value });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "TagCategory not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteTagCategoryById = async (req, res) => {
  const { _id } = req.body;
  try {
    const isAlreadyExist = await TagCategory.findOneAndDelete({ _id });
    if (!isAlreadyExist) {
      res.status(500).json({ error: "TagCategory not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTagCategory = async (req, res) => {
  const { value, reference } = req.body;
  try {
    const IsNewExist = await TagCategory.findOne({ value });
    const IsOldExist = await TagCategory.findOne({ value: reference });
    if (IsNewExist && IsOldExist && !IsNewExist._id.equals(IsOldExist._id)) {
      res.status(500).json({
        error: "Can't change by another tag category name that already exist.",
      });
      return;
    }

    const isAlreadyExist = await TagCategory.findOneAndUpdate(
      { value: reference },
      { value }
    );
    if (!isAlreadyExist) {
      res.status(500).json({ error: "TagCategory not found" });
      return;
    }
    res.json(isAlreadyExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllCategories,
  addTagCategory,
  deleteTagCategoryByValue,
  deleteTagCategoryById,
  updateTagCategory,
  getTagCategoryByValue,
  getTagCategoryById,
};
