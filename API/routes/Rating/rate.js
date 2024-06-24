const { getAll } = require("../../controllers/Rating/rate-controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
