const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { isAuthenticatedUser } = require("../middleware/auth");


router.route("/").get(isAuthenticatedUser, getPrivateRoute);

module.exports = router;
