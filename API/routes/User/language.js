const { getAll } = require("../../controllers/User/language.controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
