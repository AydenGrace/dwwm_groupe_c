const GiftCard = require("../../models/Reduction/giftcard.schema");

const getAll = async (req, res) => {
  const all = await GiftCard.find();
  res.json(all);
};

module.exports = { getAll };
