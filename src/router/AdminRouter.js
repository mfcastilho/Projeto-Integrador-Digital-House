/*--- IMPORTAÇOES --- */
const express = require("express");
const router = express.Router();

/*--- IMPORTAÇÃO DO CONTROLLER --- */
const AdminController = require("../controller/AdminController");


/*--- IMPORTAÇÃO DOS MIDDLEWARES --- */
const AuthController = require("../controller/AuthController.js");
const isLoginMiddleware = require("../middlewares/isLoginMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");


/*--- IMPLEMENTAÇÃODOS MIDDLEWARES --- */
router.use(isAdminMiddleware);
router.use(isLoginMiddleware);


/*--- ROTAS--- */
router.get("/admin/home", AdminController.showHomeAdmin);
router.get("/admin/produtos/cadastro", AdminController.showProductRegisterPage);


module.exports = router;