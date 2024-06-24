const {
  getAll,
  getInterestByValue,
  getInterestById,
  addInterest,
  deleteInterestByValue,
  deleteInterestById,
  updateInterest,
} = require("../../controllers/User/interest.controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/getByValue", getInterestByValue);

router.get("/getById", getInterestById);

router.post("/add", addInterest);

router.delete("/deleteByValue", deleteInterestByValue);

router.delete("/deleteById", deleteInterestById);

router.patch("/updateByValue", updateInterest);

module.exports = router;
