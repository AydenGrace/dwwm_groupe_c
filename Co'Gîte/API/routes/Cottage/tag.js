const {
  getAll,
  updateTag,
  deleteTagById,
  deleteTagByValue,
  addTag,
  getTagById,
  getTagByValue,
  getByCategory,
} = require("../../controllers/Cottage/tag-controller");

const router = require("express").Router();
const categoryRoutes = require("./Tags_Category/tags_category");

router.use("/category", categoryRoutes);

router.get("/", getAll);

router.post("/getAllFrom", getByCategory);

router.get("/getByValue", getTagByValue);

router.get("/getById", getTagById);

router.post("/add", addTag);

router.delete("/deleteByValue", deleteTagByValue);

router.delete("/deleteById", deleteTagById);

router.patch("/updateByValue", updateTag);

module.exports = router;
