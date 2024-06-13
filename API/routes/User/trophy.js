const { getAll } = require("../../controllers/User/trophy-controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
