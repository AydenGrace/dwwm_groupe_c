const { getAll } = require("../../controllers/Rating/respond-controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
