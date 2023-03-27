/*--- IMPORTAÇOES --- */
const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, path.resolve("src", "public", "img"));
    },
    filename: (req, file, callback)=>{
        callback(null, `${Date.now()}_product_${file.originalname}`);
    }
})

const uploadFile = multer({ storage:storage});

/*--- IMPORTAÇÃO DO CONTROLLER --- */
const AdminController = require("../controller/AdminController");


/*--- IMPORTAÇÃO DOS MIDDLEWARES --- */
const isLoginMiddleware = require("../middlewares/isLoginMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");
const errorMiddleware = require("../middlewares/genericErrorMiddleware");


/*--- IMPLEMENTAÇÃO DOS MIDDLEWARES --- */
router.use(isAdminMiddleware);
router.use(isLoginMiddleware);


/*--- ROTAS--- */
router.get("/admin/home", AdminController.showHomeAdmin);
router.get("/admin/produtos/cadastro", AdminController.showProductRegisterPage);
router.get("/admin/produtos/:id/editar", AdminController.showEditProductPage);

router.post("/admin/produtos/cadastro", uploadFile.fields([
    {name: "image", maxCount: 1},
    {name: "tshirtPrint", maxCount: 1}
]), AdminController.storeProduct);


router.put("/admin/produtos/:id/editar", uploadFile.single("image"), AdminController.editProduct);
router.delete("/admin/produtos/:id/excluir", AdminController.deleteProduct);
// router.get("/admin/produtos/:id/excluir", AdminController.deleteProduct);


router.use(errorMiddleware)

module.exports = router;