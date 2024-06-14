const { getAll } = require("../../controllers/Reduction/giftcard-controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
