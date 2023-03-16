const express = require("express");
const router = express.Router();

const registerFormValidationMiddleware = require("../middlewares/registerFormValidationMiddleware");
const loginFormValidationMiddleware = require("../middlewares/loginFormValidationMiddleware")

const AuthController = require("../controller/AuthController.js");

const lodingValidation = loginFormValidationMiddleware;
const registerValidations = registerFormValidationMiddleware;


router.get("/login", AuthController.showLogin);
router.post("/login", lodingValidation, AuthController.logging);

router.get("/usuario/cadastro", AuthController.showRegister); 
router.post("/usuario/cadastro", registerValidations, AuthController.storeUser);

router.post("/usuario/logout", AuthController.logout);

module.exports = router;