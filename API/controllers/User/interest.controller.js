const Interest = require("../../models/User/interest.schema");

const getAll = async (req, res) => {
  const all = await Interest.find();
  res.json(all);
};

module.exports = { getAll };
