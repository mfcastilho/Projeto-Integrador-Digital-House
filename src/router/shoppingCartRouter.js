const express = require("express");
const router = express.Router()

const ShoppingCartController = require("../controller/ShoppingCartController.js");

const notLoggedMiddleware = require("../middlewares/notLoggedMiddleware")

const errorMiddleware = require("../middlewares/genericErrorMiddleware");




// router.get("/carrinho", ShoppingCartController.showShoppingCart);
// router.post("/carrinho", ShoppingCartController.getProductInfosToBuy);
// router.post("/carrinho", ShoppingCartController.getProductInfosToBuy);


router.get("/carrinho", notLoggedMiddleware, ShoppingCartController.show);
router.post("/carrinho/adicionar", ShoppingCartController.addCart);



router.use(errorMiddleware);

module.exports = router;