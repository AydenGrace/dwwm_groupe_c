const {
  getAll,
  addCottage,
  getById,
  getByName,
  updateCottage,
  deleteCottageByName,
  deleteCottageById,
} = require("../../controllers/Cottage/cottage-controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/getPopular", getAll);

router.get("/getNew", getAll);

router.get("/getBest", getAll);

router.get("/getById", getById);

router.get("/getByName", getByName);

router.patch("/update", updateCottage);

router.delete("/deleteByName", deleteCottageByName);

router.delete("/deleteById", deleteCottageById);

router.get("/", getAll);

router.post("/add", addCottage);

module.exports = router;
