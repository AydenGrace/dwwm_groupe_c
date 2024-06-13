const Cottage = require("../../models/Cottage/cottage.schema");

const getAll = async (req, res) => {
  const all = await Cottage.find();
  res.json(all);
};

module.exports = { getAll };
