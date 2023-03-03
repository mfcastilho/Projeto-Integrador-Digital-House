const express = require("express");
const router = express.Router();


const UserController = require("../controller/UserController.js");



router.get("/usuario/area-cliente/:id/dados-pessoais", UserController.showUserAreaPage);
router.get("/usuario/area-cliente/:id/dados-pessoais/editar", UserController.showEditUserPersonalDataPage);
router.post("/usuario/area-cliente/:id/dados-pessoais", UserController.updateUserInfos);

router.get("/usuario/area-cliente/:id/endereco", UserController.showUserAddressPage);
router.get("/usuario/area-cliente/:id/endereco/editar", UserController.showEditUserAddress);
router.post("/usuario/area-cliente/:id/endereco", UserController.updateUserAddressInfos);







module.exports = router;