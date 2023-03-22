const express = require("express");
const router = express.Router();

const loginFormValidationMiddleware = require("../middlewares/loginFormValidationMiddleware");
const registerFormValidationMiddleware = require("../middlewares/registerFormValidationMiddleware")

const errorMiddleware = require("../middlewares/genericErrorMiddleware");

const AuthController = require("../controller/AuthController.js");

const loginValidation = loginFormValidationMiddleware;
const registerValidations = registerFormValidationMiddleware

router.get("/login", AuthController.showLogin);
router.post("/login", loginValidation, AuthController.logging);

router.get("/usuario/cadastro", AuthController.showRegister); 
router.post("/usuario/cadastro", registerValidations, AuthController.storeUser);

router.post("/usuario/logout", AuthController.logout);

router.use(errorMiddleware)

module.exports = router;