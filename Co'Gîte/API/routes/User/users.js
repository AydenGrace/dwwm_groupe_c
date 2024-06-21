const {
  signupUser,
  verifyMail,
  loginUser,
  forgotPwd,
  changePwd,
  changePwdAsConnected,
  deleteAccount,
  demandDeleteAccount,
  addTrophy,
  getbyEmail,
  addInterest,
  addLanguage,
} = require("../../controllers/User/user-controller");

const router = require("express").Router();

router.post("/signup", signupUser);

router.post("/signin", loginUser);

router.post("/forgotPassword", forgotPwd);

router.patch("/changePassword", changePwd);

router.patch("/changePasswordAsConnected", changePwdAsConnected);

router.get("/verifyMail/:token", verifyMail);

router.post("/deleteAccountDemand", demandDeleteAccount);

router.get("/deleteAccountConfirmation/:token", deleteAccount);

router.patch("/addTrophy", addTrophy);

router.patch("/addInterest", addInterest);

router.patch("/addLanguage", addLanguage);

router.get("/get", getbyEmail);

module.exports = router;
