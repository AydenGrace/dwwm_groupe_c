const router = require("express").Router();

const userRoutes = require("./User/users");
const trophyRoutes = require("./User/trophy");
const interestRoutes = require("./User/interest");
const languageRoutes = require("./User/language");

const rateRoutes = require("./Rating/rate");
const respondRoutes = require("./Rating/respond");

const cottageRoutes = require("./Cottage/cottage");
const reservationRoutes = require("./Cottage/reservation");
const tagRoutes = require("./Cottage/tag");

const giftcardRoutes = require("./Reduction/giftcard");

router.use("/users", userRoutes);
router.use("/trophy", trophyRoutes);
router.use("/interest", interestRoutes);
router.use("/language", languageRoutes);

router.use("/rate", rateRoutes);
router.use("/respond", respondRoutes);

router.use("/cottage", cottageRoutes);
router.use("/reservation", reservationRoutes);
router.use("/tag", tagRoutes);

router.use("/giftcard", giftcardRoutes);

module.exports = router;
