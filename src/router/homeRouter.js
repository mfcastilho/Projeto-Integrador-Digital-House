const express = require("express");
const router = express.Router()

const HomeController = require("../controller/HomeController.js");
const isLogginMiddleware = require("../middlewares/isLoginMiddleware");

router.use(isLogginMiddleware);

router.get("/", HomeController.showHome);
router.get("/home", HomeController.showHome);
router.get("/listagem-produtos", HomeController.showProductsListing);
router.get("/listagem-produtos/masculinos", HomeController.showMaleProductsListing);
router.get("/listagem-produtos/femininos", HomeController.showFemaleProductsListing);
router.get("/listagem-produtos/categoria/anime", HomeController.showAnimesProductsListing);
router.get("/listagem-produtos/categoria/filme", HomeController.showMoviesProductsListing);
router.get("/produto/:id", HomeController.showProduct);




module.exports = router;