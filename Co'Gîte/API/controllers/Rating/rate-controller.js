const Rate = require("../../models/Rating/rate.schema");

const getAll = async (req, res) => {
  const all = await Rate.find();
  res.json(all);
};

module.exports = { getAll };
