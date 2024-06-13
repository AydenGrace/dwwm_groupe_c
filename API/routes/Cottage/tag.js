const { getAll } = require("../../controllers/Cottage/tag-controller");
const {
  getAllCategories,
} = require("../../controllers/Cottage/tag_category-controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
