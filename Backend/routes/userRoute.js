const express = require("express");
const { registerUser, loginUser, logout, updatePassword, updateProfile, } = require('../controllers/userController');
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");


router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;