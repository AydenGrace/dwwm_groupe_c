const {
  getAll,
  addCard,
  deleteCard,
  setUsed,
  updateCard,
  getByCode,
  getById,
} = require("../../controllers/Reduction/giftcard-controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/getByCode", getByCode);

router.get("/getById", getById);

router.post("/add", addCard);

router.delete("/delete", deleteCard);

router.patch("/use", setUsed);

router.patch("/update", updateCard);

module.exports = router;
