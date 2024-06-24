const {
  getAll,
  addReservation,
  deleteReservationById,
  getByCottage,
  getById,
  getByUser,
  updateReservation,
} = require("../../controllers/Cottage/reservation-controller");

const router = require("express").Router();

router.get("/", getAll);

router.post("/add", addReservation);

router.get("/getByCottage", getByCottage);

router.get("/getById", getById);

router.get("/getByUser", getByUser);

router.patch("/update", updateReservation);

router.delete("/delete", deleteReservationById);

module.exports = router;
