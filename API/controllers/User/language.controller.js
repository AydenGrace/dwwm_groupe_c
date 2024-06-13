const Language = require("../../models/User/language.schema");

const getAll = async (req, res) => {
  const all = await Language.find();
  res.json(all);
};

module.exports = { getAll };
