const express = require("express");
const router = express.Router();

const loginFormValidationMiddleware = require("../middlewares/loginFormValidationMiddleware");
const AuthController = require("../controller/AuthController.js");

const validations = loginFormValidationMiddleware;


router.get("/login", AuthController.showLogin);
router.post("/login", validations, AuthController.logging);

router.get("/usuario/cadastro", AuthController.showRegister); 
router.post("/usuario/cadastro", AuthController.storeUser);

router.post("/usuario/logout", AuthController.logout);

module.exports = router;