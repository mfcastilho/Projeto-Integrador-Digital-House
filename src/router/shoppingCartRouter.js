const express = require("express");
const router = express.Router()

const ShoppingCartController = require("../controller/ShoppingCartController.js");

const notLoggedMiddleware = require("../middlewares/notLoggedMiddleware")
const onlyBuyIfIsLoggedMiddleware = require("../middlewares/onlyBuyIfIsLoggedMiddleware");
const errorMiddleware = require("../middlewares/genericErrorMiddleware");



router.get("/carrinho",  notLoggedMiddleware, ShoppingCartController.showShoppingCartPage);
router.post("/carrinho/adicionar", onlyBuyIfIsLoggedMiddleware, ShoppingCartController.addShoppingCart);
router.delete("/carrinho/:id/deletar", ShoppingCartController.removeShoppingCart);


router.use(errorMiddleware);

module.exports = router; 