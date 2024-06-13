const Trophy = require("../../models/User/trophy.schema");

const getAll = async (req, res) => {
  const all = await Trophy.find();
  res.json(all);
};

module.exports = { getAll };
