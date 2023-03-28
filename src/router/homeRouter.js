
/*--- IMPORTAÇÕES --- */
const express = require("express");
const router = express.Router()


/*--- IMPORTAÇÕES DO CONTROLLERS --- */
const HomeController = require("../controller/HomeController.js");


const isLogginMiddleware = require("../middlewares/isLoginMiddleware");
const errorMiddleware = require("../middlewares/genericErrorMiddleware");




/*--- MIDDLEWARE --- */
router.use(isLogginMiddleware);


/*--- ROTAS --- */
router.get("/", HomeController.showHome);
router.get("/home", HomeController.showHome);

router.get("/listagem-produtos", HomeController.showAllProducts);

router.get("/listagem-produtos/masculinos", HomeController.showMaleProductsListing);
router.get("/listagem-produtos/femininos", HomeController.showFemaleProductsListing);

router.get("/listagem-produtos/categoria/anime", HomeController.showAnimesProductsListing);
router.get("/listagem-produtos/categoria/filme", HomeController.showMoviesProductsListing);

router.get("/produto/:id/masculino",  HomeController.showMaleProduct);
router.get("/produto/:id/feminino", HomeController.showFemaleProduct);

router.use(errorMiddleware)

module.exports = router;
