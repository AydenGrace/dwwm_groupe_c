const {
  getAll,
  getAllPreviews,
  addCottage,
  getById,
  getByName,
  updateCottage,
  deleteCottageByName,
  deleteCottageById,
  getPopularPreviews,
  getNewsPreviews,
} = require("../../controllers/Cottage/cottage-controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/previews", getAllPreviews);

router.get("/getPopular", getPopularPreviews);

router.get("/getNew", getNewsPreviews);

router.get("/getBest", getPopularPreviews);

router.get("/getById", getById);

router.get("/getByName", getByName);

router.patch("/update", updateCottage);

router.delete("/deleteByName", deleteCottageByName);

router.delete("/deleteById", deleteCottageById);

router.get("/", getAll);

router.post("/add", addCottage);

module.exports = router;
