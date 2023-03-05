const express = require("express");
const router = express.Router();
const loginFormValidationMiddleware = require("../middlewares/loginFormValidationMiddleware");

const LoginController = require("../controller/LoginController.js");

const validations = loginFormValidationMiddleware;



router.get("/login", LoginController.showLogin);


router.post("/login", validations, LoginController.logging);

module.exports = router;