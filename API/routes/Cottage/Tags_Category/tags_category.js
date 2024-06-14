const {
  updateTagCategory,
  getTagCategoryByValue,
  getAllCategories,
  getTagCategoryById,
  addTagCategory,
  deleteTagCategoryByValue,
  deleteTagCategoryById,
} = require("../../../controllers/Cottage/tag_category-controller");

const router = require("express").Router();

router.get("/", getAllCategories);

router.get("/getByValue", getTagCategoryByValue);

router.get("/getById", getTagCategoryById);

router.post("/add", addTagCategory);

router.delete("/deleteByValue", deleteTagCategoryByValue);

router.delete("/deleteById", deleteTagCategoryById);

router.patch("/updateByValue", updateTagCategory);

module.exports = router;
