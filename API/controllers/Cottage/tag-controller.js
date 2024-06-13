const Tag = require("../../models/Cottage/tag.schema");

const getAll = async (req, res) => {
  const all = await Tag.find();
  res.json(all);
};

module.exports = { getAll };
