const express = require("express");
const router = express.Router();

const RegisterController = require("../controller/RegisterController.js");


router.get("/usuario/cadastro", RegisterController.showRegister); //

router.post("/usuario/cadastro", RegisterController.storeUser);

module.exports = router;