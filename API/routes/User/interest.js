const { getAll } = require("../../controllers/User/interest.controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
