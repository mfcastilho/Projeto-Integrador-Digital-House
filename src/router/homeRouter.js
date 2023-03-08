const express = require("express");
const router = express.Router()

const HomeController = require("../controller/HomeController.js");
const isLogginMiddleware = require("../middlewares/isLoginMiddleware");

router.use(isLogginMiddleware);

router.get("/", HomeController.showHome);
router.get("/home", HomeController.showHome);
router.get("/listagem-produtos", HomeController.showProductsListing);
router.get("/produto/:id", HomeController.showProduct);




module.exports = router;