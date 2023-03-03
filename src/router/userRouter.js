const express = require("express");
const router = express.Router();


const UserController = require("../controller/UserController.js");



router.get("/dados-pessoais", UserController.showUserAreaPage);
router.get("/dados-pessoais/editar", UserController.showEditUserPersonalDataPage);
router.post("/dados-pessoais", UserController.updateUserInfos);









module.exports = router;