const express = require("express");
const router = express.Router();


const UserController = require("../controller/UserController.js");



router.get("/usuario/:id/dados-pessoais", UserController.showUserPersonalDataPage);

router.get("/usuario/:id/dados-pessoais/editar", UserController.showEditUserPersonalDataPage);

router.post("/usuario/:id/dados-pessoais", UserController.updateUser);




module.exports = router;