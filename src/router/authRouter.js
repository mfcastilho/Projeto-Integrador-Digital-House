const express = require("express");
const router = express.Router();

const registerFormValidationMiddleware = require("../middlewares/registerFormValidationMiddleware");
const AuthController = require("../controller/AuthController.js");

const validations = registerFormValidationMiddleware;


router.get("/login", AuthController.showLogin);
router.post("/login", validations, AuthController.logging);

router.get("/usuario/cadastro", AuthController.showRegister); 
router.post("/usuario/cadastro", validations, AuthController.storeUser);

router.post("/usuario/logout", AuthController.logout);

module.exports = router;