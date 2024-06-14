const {
  getAll,
  addLanguage,
  deleteLanguageByValue,
  deleteLanguageById,
  getLanguageByValue,
  getLanguageById,
  updateLanguage,
} = require("../../controllers/User/language.controller");

const router = require("express").Router();

router.get("/", getAll);

router.get("/getByValue", getLanguageByValue);

router.get("/getById", getLanguageById);

router.post("/add", addLanguage);

router.delete("/deleteByValue", deleteLanguageByValue);

router.delete("/deleteById", deleteLanguageById);

router.patch("/updateByValue", updateLanguage);

module.exports = router;
