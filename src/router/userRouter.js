const express = require("express");
const router = express.Router();


const UserController = require("../controller/UserController.js");



router.get("/usuario/:id/dados-pessoais", UserController.showUserPersonalDataPage);


router.get("/usuario/:id/dados-pessoais/editar", UserController.showEditUserPersonalDataPage)




module.exports = router;