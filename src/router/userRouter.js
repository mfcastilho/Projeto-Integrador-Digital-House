const express = require("express");
const router = express.Router();


const UserController = require("../controller/UserController.js");
const notLoggedMiddleware = require("../middlewares/notLoggedMiddleware");
const errorMiddleware = require("../middlewares/genericErrorMiddleware");

router.use(notLoggedMiddleware);


router.get("/usuario/area-cliente/:id/dados-pessoais", UserController.showUserAreaPage);//estrutura controller finalizada
router.get("/usuario/area-cliente/:id/dados-pessoais/editar", UserController.showEditUserPersonalDataPage);//estrutura controller finalizada

router.get("/usuario/area-cliente/:id/endereco", UserController.showUserAddressPage);//estrutura controller finalizada
router.get("/usuario/area-cliente/:id/endereco/editar", UserController.showEditUserAddress);//estrutura controller finalizada

router.get("/usuario/area-cliente/:id/pedidos", UserController.showUserRequestesPage);
router.get("/usuario/area-cliente/:id/pedidos/editar", UserController.showEditUserRequests);



router.post("/usuario/area-cliente/:id/dados-pessoais", UserController.updateUserInfos);//estrutura controller finalizada

router.post("/usuario/area-cliente/:id/endereco", UserController.updateUserAddressInfos);//estrutura controller finalizada

router.post("/usuario/area-cliente/:id/pedidos", UserController.updateUserRequestsInfos);


router.use(errorMiddleware)




module.exports = router;