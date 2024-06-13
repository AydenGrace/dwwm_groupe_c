const {
  signupUser,
  verifyMail,
  loginUser,
  forgotPwd,
  changePwd,
  changePwdAsConnected,
} = require("../../controllers/User/user-controller");

const router = require("express").Router();

router.post("/signup", signupUser);

router.post("/signin", loginUser);

router.post("/forgotPassword", forgotPwd);

router.patch("/changePassword", changePwd);

router.patch("/changePasswordAsConnected", changePwdAsConnected);

router.get("/verifyMail/:token", verifyMail);

module.exports = router;
