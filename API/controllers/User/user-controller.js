const User = require("../../models/User/user.schema");
const Trophy = require("../../models/User/trophy.schema");
const Language = require("../../models/User/language.schema");
const Interest = require("../../models/User/interest.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  sendConfirmationEmail,
  sendValidationAccount,
  sendInvalidEmailToken,
  sendResetPassword,
  sendPasswordChanged,
  sendDeletedAccountConfirmation,
  sendInvalidDeleteToken,
  sendDeleteAccountDemand,
} = require("../../email/email");

const createTokenEmail = (email) => {
  return jwt.sign({ email }, process.env.SECRET, { expiresIn: "30m" });
};

const createTokenResetPassword = (email) => {
  return jwt.sign({ email }, process.env.SECRET, { expiresIn: "30m" });
};

const createTokenLogin = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30m" });
};

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const token = createTokenEmail(email);
      console.log(token);
      await sendConfirmationEmail(email, token);
      const salt = await bcrypt.genSalt(10);
      const hashPassWord = await bcrypt.hash(password, salt);
      const user = new User({
        username,
        email,
        password: hashPassWord,
        token,
      });
      await user.save();
      res.status(200).json({
        message:
          "Veuillez confirmer votre inscription en consultant votre boite mail",
      });
    } else {
      res.status(400).json({
        message: "Email déjà existant",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verifyMail = async (req, res) => {
  const token = req.params.token;

  const isTokenNull = await User.findOne({ token: token });
  const decoded = jwt.verify(token, process.env.SECRET, {
    ignoreExpiration: true,
  });
  console.log(decoded.exp * 1000);
  console.log(new Date().getTime());
  try {
    if (!isTokenNull) {
      res.status(400).json({ message: "Token déja validé" });
      return;
    }
    if (decoded.exp * 1000 > new Date().getTime()) {
      await User.findOneAndUpdate({ email: decoded.email }, { token: null });
      await sendValidationAccount(decoded.email);
      res.json({ message: "Inscription confirmée avec succès" });
    } else {
      await User.findOneAndDelete({ email: decoded.email });
      await sendInvalidEmailToken(decoded.email);
      res.status(400).json({ message: "Token invalide ou expiré" });
    }
  } catch (error) {
    console.log(error);
  }
};

const demandDeleteAccount = async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await User.findOne({ _id });
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    user.delete_token = createTokenEmail(user.email);
    await User.findOneAndUpdate(
      { _id: user._id },
      { delete_token: createTokenEmail(user.email) }
    );
    await sendDeleteAccountDemand(user.email, user.delete_token);
    res.json({
      message: "Merci de confirmer la suppression de votre compte par mail.",
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const deleteAccount = async (req, res) => {
  const token = req.params.token;

  const isTokenNull = await User.findOne({ delete_token: token });
  const decoded = jwt.verify(token, process.env.SECRET, {
    ignoreExpiration: true,
  });
  console.log(decoded.exp * 1000);
  console.log(new Date().getTime());
  try {
    if (!isTokenNull) {
      res.status(400).json({ message: "Token déja validé" });
      return;
    }
    if (decoded.exp * 1000 > new Date().getTime()) {
      await User.findOneAndDelete({ email: decoded.email });
      await sendDeletedAccountConfirmation(decoded.email);
      res.json({ message: "Suppression confirmée avec succès" });
    } else {
      await User.findOneAndUpdate(
        { email: decoded.email },
        { delete_token: null }
      );
      await sendInvalidDeleteToken(decoded.email);
      res.status(400).json({ message: "Token invalide ou expiré" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (!user.token) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = createTokenLogin(user._id);
          res.status(200).json({ user, token });
        } else {
          res.status(400).json({ message: "Mauvais Email et/ou Password" });
        }
      } else {
        res.status(400).json({ message: "Email non validé" });
      }
    } else {
      res.status(400).json({ message: "Mauvais Email et/ou Password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const forgotPwd = async (req, res) => {
  const { email } = req.body;
  try {
    const token = createTokenResetPassword(email);
    const user = await User.findOneAndUpdate(
      { email },
      { token_password: token }
    );
    if (user) {
      await sendResetPassword(email, token.replaceAll(".", ","));
      res.json({ message: "Email send." });
    } else {
      res.status(400).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const changePwd = async (req, res) => {
  const { password, token } = req.body;
  console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashPassWord = await bcrypt.hash(password, salt);

  const isTokenNull = await User.findOne({ token_password: token });
  const decoded = jwt.verify(token, process.env.SECRET, {
    ignoreExpiration: true,
  });
  console.log(decoded.exp * 1000);
  console.log(new Date().getTime());
  try {
    if (!isTokenNull) {
      res.status(400).json({ message: "Demande non trouvée." });
      return;
    }
    if (decoded.exp * 1000 > new Date().getTime()) {
      await User.findOneAndUpdate(
        { token_password: token },
        { token_password: null, password: hashPassWord }
      );
      await sendPasswordChanged(decoded.email);
      res.json({ message: "Modification enregistrée avec succès" });
    } else {
      await User.findOneAndUpdate(
        { token_password: token },
        { token_password: null }
      );
      res.status(400).json({ message: "Demande expirée." });
    }
  } catch (error) {
    console.log(error);
  }
};

const changePwdAsConnected = async (req, res) => {
  const { _id, oldPassword, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassWord = await bcrypt.hash(password, salt);

  const isUserFind = await User.findOne({ _id });
  console.log(isUserFind);
  if (isUserFind) {
    const match = await bcrypt.compare(oldPassword, isUserFind.password);
    if (match) {
      await User.findOneAndUpdate({ _id }, { password: hashPassWord });
      res.status(200).json({ message: "Mot de passe modifié." });
    } else {
      res.status(400).json({ message: "Ancien mot de passe incorrect." });
    }
  } else {
    res.status(400).json({ message: "Compte inconnu." });
  }
};

const addTrophy = async (req, res) => {
  const { _id, trophyId } = req.body;
  try {
    const isTrophyExist = await Trophy.findOne({ _id: trophyId });
    if (!isTrophyExist) {
      res.status(500).json({ message: "Trophy not found" });
      return;
    }
    const isUserExist = await User.findOne({ _id }).populate("trophies");
    if (!isUserExist) {
      res.status(500).json({ message: "User not found" });
      return;
    }
    if (isUserExist.trophies.some((trophy) => trophy.equals(trophyId))) {
      res.status(500).json({ message: "Trophy already won" });
      return;
    }
    const userUpdated = await User.findOneAndUpdate(
      { _id },
      { $push: { trophies: trophyId } }
    );
    res.json(userUpdated);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const addInterest = async (req, res) => {
  const { _id, interestId } = req.body;
  try {
    const isInterestExist = await Interest.findOne({ _id: interestId });
    if (!isInterestExist) {
      res.status(500).json({ message: "Trophy not found" });
      return;
    }
    const isUserExist = await User.findOne({ _id }).populate("interests");
    if (!isUserExist) {
      res.status(500).json({ message: "User not found" });
      return;
    }
    if (isUserExist.interests.some((interest) => interest.equals(interestId))) {
      res.status(500).json({ message: "Interest already added" });
      return;
    }
    const userUpdated = await User.findOneAndUpdate(
      { _id },
      { $push: { interests: interestId } }
    );
    res.json(userUpdated);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const addLanguage = async (req, res) => {
  const { _id, languageId } = req.body;
  try {
    const isLanguageExist = await Language.findOne({ _id: languageId });
    if (!isLanguageExist) {
      res.status(500).json({ message: "Language not found" });
      return;
    }
    const isUserExist = await User.findOne({ _id }).populate("languages");
    if (!isUserExist) {
      res.status(500).json({ message: "User not found" });
      return;
    }
    if (isUserExist.languages.some((lang) => lang.equals(languageId))) {
      res.status(500).json({ message: "Language already added" });
      return;
    }
    const userUpdated = await User.findOneAndUpdate(
      { _id },
      { $push: { languages: languageId } }
    );
    res.json(userUpdated);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const getbyEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const userToFind = await User.findOne({ email })
      .populate("trophies")
      .populate("interests")
      .populate("languages");
    if (!userToFind) {
      res.status(500).json({ message: "User not found" });
      return;
    }
    res.json(userToFind);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signupUser,
  verifyMail,
  loginUser,
  forgotPwd,
  changePwd,
  changePwdAsConnected,
  demandDeleteAccount,
  deleteAccount,
  addTrophy,
  getbyEmail,
  addInterest,
  addLanguage,
};
