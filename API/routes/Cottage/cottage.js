const { getAll } = require("../../controllers/Cottage/cottage-controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
