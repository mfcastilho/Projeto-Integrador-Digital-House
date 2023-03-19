const express = require("express");
const router = express.Router()

const ShoppingCartController = require("../controller/ShoppingCartController.js");

const errorMiddleware = require("../middlewares/genericErrorMiddleware");


router.get("/carrinho", ShoppingCartController.showShoppingCart);

router.post("/carrinho", ShoppingCartController.getProductInfosToBuy);
router.post("/carrinho", ShoppingCartController.getProductInfosToBuy);

router.use(errorMiddleware)

module.exports = router;