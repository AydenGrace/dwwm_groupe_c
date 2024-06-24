const {
  getAll,
  addRate,
  deleteRate,
  getByCottage,
  getByCreator,
  getById,
  updateRate,
} = require("../../controllers/Rating/rate-controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/getById", getById);

router.get("/getByCreator", getByCreator);

router.get("/getByCottage", getByCottage);

router.post("/add", addRate);

router.patch("/update", updateRate);

router.delete("/delete", deleteRate);

module.exports = router;
