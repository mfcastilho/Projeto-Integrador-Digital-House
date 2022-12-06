const express = require("express");
const router = express.Router();

const RegisterController = require("../controller/RegisterController.js");


router.get("/cadastro", RegisterController.showRegister);


module.exports = router;