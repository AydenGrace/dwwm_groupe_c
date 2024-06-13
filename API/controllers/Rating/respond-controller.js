const Respond = require("../../models/Rating/respond.schema");

const getAll = async (req, res) => {
  const all = await Respond.find();
  res.json(all);
};

module.exports = { getAll };
