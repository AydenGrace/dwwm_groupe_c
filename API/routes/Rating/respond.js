const {
  getAll,
  addRespond,
  deleteRespond,
  getByCreator,
  getById,
  getByRate,
  updateRespond,
} = require("../../controllers/Rating/respond-controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/getById", getById);

router.get("/getByOrigin", getByRate);

router.get("/getByCreator", getByCreator);

router.post("/add", addRespond);

router.patch("/update", updateRespond);

router.delete("/delete", deleteRespond);

module.exports = router;
