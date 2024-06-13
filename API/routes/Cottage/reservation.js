const { getAll } = require("../../controllers/Cottage/reservation-controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
