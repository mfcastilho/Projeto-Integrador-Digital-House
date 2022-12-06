const express = require("express");
const router = express.Router();

const LoginController = require("../controller/LoginController.js");


router.get("/login", LoginController.showLogin);


module.exports = router;