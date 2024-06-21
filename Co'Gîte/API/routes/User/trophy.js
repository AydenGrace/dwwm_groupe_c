const {
  getAll,
  getTrophyByValue,
  getTrophyById,
  addTrophy,
  deleteTrophyByValue,
  deleteTrophyById,
  updateTrophy,
} = require("../../controllers/User/trophy-controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/getByValue", getTrophyByValue);

router.get("/getById", getTrophyById);

router.post("/add", addTrophy);

router.delete("/deleteByValue", deleteTrophyByValue);

router.delete("/deleteById", deleteTrophyById);

router.patch("/updateByValue", updateTrophy);

module.exports = router;
