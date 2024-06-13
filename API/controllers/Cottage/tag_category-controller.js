const TagCategory = require("../../models/Cottage/tag_category.schema");

const getAllCategories = async (req, res) => {
  const all = await TagCategory.find();
  res.json(all);
};

module.exports = { getAllCategories };
